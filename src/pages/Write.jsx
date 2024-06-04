import { useState } from 'react';
import ReactQuill from 'react-quill'; // react-quill 라이브러리
import 'react-quill/dist/quill.snow.css'; // react-quill 라이브러리
import axios from 'axios';
import styled from 'styled-components';

const Write = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 재렌더링 방지

    const formData = new FormData(); // 이미지를 처리하기 위해 form-data 형식으로
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post('백엔드 매핑 주소', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // 이미지를 처리하기 위해 form-data 형식으로
        }
      });
      alert('게시글 등록 성공');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WriteLayout>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">제목</Label>
          <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="content">내용</Label>
          <StyledReactQuill value={content} onChange={handleContentChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="file">이미지 첨부</Label>
          <Input type="file" id="file" onChange={handleFileChange} />
        </FormGroup>
        <Button type="submit">등록</Button>
      </Form>
    </WriteLayout>
  );
};

export default Write;

const WriteLayout = styled.div`
  padding: 0 250px;
  margin: 0 auto;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 98%;
  padding: 24px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const StyledReactQuill = styled(ReactQuill)`
  .ql-editor {
    min-height: 200px;
    font-size: 14px;
    padding: 16px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
