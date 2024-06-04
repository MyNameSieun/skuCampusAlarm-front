import { useState } from "react";
import ReactQuill from "react-quill"; //react-quill 라이브러리
import "react-quill/dist/quill.snow.css"; //react-quill 라이브러리
import axios from "axios";

const Write = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //재렌더링 방지

    const formData = new FormData(); //이미지를 처리하기 위해 form-data 형식으로
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.post("백엔드 매핑 주소", formData, {
        headers: {
          "Content-Type": "multipart/form-data", //이미지를 처리하기 위해 form-data 형식으로
        },
      });
      alert("게시글 등록 성공");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(title);
  console.log(content);
  console.log(file);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <div>
          <label htmlFor="file">이미지 첨부</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Write;
