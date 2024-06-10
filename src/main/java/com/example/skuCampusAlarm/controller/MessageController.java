package com.example.skuCampusAlarm.controller;

import com.example.skuCampusAlarm.domain.Member;
import com.example.skuCampusAlarm.domain.Message;
import com.example.skuCampusAlarm.service.MessageService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class MessageController {

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/messages/send/{receiverId}")
    public ResponseEntity<String> sendMessage(@PathVariable("receiverId") Long receiverId, @RequestBody Map<String, String> request, HttpSession session) {
        Member loggedInMember = (Member) session.getAttribute("loggedInMember");
        if (loggedInMember == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 필요합니다.");
        }

        String content = request.get("content");

        messageService.sendMessage(loggedInMember.getId(), receiverId, content);
        return ResponseEntity.ok("메시지가 성공적으로 전송되었습니다.");
    }

    @GetMapping("/messages")
    public ResponseEntity<List<Message>> getMessages(HttpSession session) {
        Member loggedInMember = (Member) session.getAttribute("loggedInMember");
        if (loggedInMember == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        List<Message> messages = messageService.getMessagesForReceiver(loggedInMember.getId());
        return ResponseEntity.ok(messages);
    }

    @GetMapping("/messages/conversation/{otherUserId}")
    public ResponseEntity<List<Message>> getConversation(@PathVariable("otherUserId") Long otherUserId, HttpSession session) {
        Member loggedInMember = (Member) session.getAttribute("loggedInMember");
        if (loggedInMember == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        List<Message> conversation = messageService.getConversation(loggedInMember.getId(), otherUserId);
        return ResponseEntity.ok(conversation);
    }


@GetMapping("/messages/conversations")
    public ResponseEntity<List<Map<String, Object>>> getAllConversations(HttpSession session) {
        Member loggedInMember = (Member) session.getAttribute("loggedInMember");
        if (loggedInMember == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        List<Map<String, Object>> conversations = messageService.getAllConversations(loggedInMember.getId());
        return ResponseEntity.ok(conversations);
    }
}
