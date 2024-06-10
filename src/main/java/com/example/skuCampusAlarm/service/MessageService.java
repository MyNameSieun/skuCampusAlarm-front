package com.example.skuCampusAlarm.service;

import com.example.skuCampusAlarm.domain.Member;
import com.example.skuCampusAlarm.domain.Message;
import com.example.skuCampusAlarm.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<Message> getConversation(Long user1Id, Long user2Id) {
        List<Message> conversation = messageRepository.findConversation(user1Id, user2Id);
        markMessagesAsRead(conversation, user1Id);
        return conversation;
    }

    public void sendMessage(Long senderId, Long receiverId, String content) {
        Message message = new Message();
        message.setSender(new Member(senderId));
        message.setReceiver(new Member(receiverId));
        message.setContent(content);
        message.setSentAt(LocalDateTime.now());
        message.setRead(false);
        messageRepository.save(message);
    }

    public List<Message> getMessagesForReceiver(Long receiverId) {
        return messageRepository.findByReceiverId(receiverId);
    }

    public List<Map<String, Object>> getAllConversations(Long userId) {
        List<Message> messages = messageRepository.findAllBySenderIdOrReceiverId(userId);
        Map<Long, List<Message>> groupedMessages = messages.stream()
                .collect(Collectors.groupingBy(message -> {
                    if (message.getSender().getId().equals(userId)) {
                        return message.getReceiver().getId();
                    } else {
                        return message.getSender().getId();
                    }
                }));

        return groupedMessages.entrySet().stream()
                .map(entry -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("userId", entry.getKey());
                    map.put("latestMessage", entry.getValue().stream()
                            .max(Comparator.comparing(Message::getSentAt))
                            .orElse(null));
                    return map;
                }).collect(Collectors.toList());
    }

    private void markMessagesAsRead(List<Message> messages, Long userId) {
        for (Message message : messages) {
            if (message.getReceiver().getId().equals(userId) && !message.isRead()) {
                message.setRead(true);
                messageRepository.save(message);
            }
        }
    }

    public List<Message> getUnreadMessagesForReceiver(Long receiverId) {
        return messageRepository.findAllByReceiverIdAndIsReadFalse(receiverId);
    }
}