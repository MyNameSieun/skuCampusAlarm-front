import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 6576008f5d4b180701fdf7af6ef5d5a5fea2c296

const Register = () => {
  const [error, setError] = useState('');

<<<<<<< HEAD
  const navigate = useNavigate();

=======
>>>>>>> 6576008f5d4b180701fdf7af6ef5d5a5fea2c296
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const initialValues = {
    name: '',
    nickname: '',
    email: '',
    password1: '',
    password2: ''
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, '이름은 최소 2자 이상 입력하세요.')
      .max(8, '이름은 최대 8자까지 입력할 수 있습니다.')
      .required('값을 입력하세요.'),
    nickname: Yup.string()
      .min(3, '닉네임은 최소 3자 이상 입력하세요.')
      .max(8, '닉네임은 최대 8자까지 입력할 수 있습니다.')
      .required('값을 입력하세요.'),
    email: Yup.string().email('유효한 이메일을 입력해주세요.').required('값을 입력해주세요.'),
    password1: Yup.string()
      .min(5, '비밀번호는 최소 5자 이상 입력하세요.')
      .matches(passwordRules, {
        message: '최소 5자, 1개 이상의 대문자, 소문자, 숫자를 포함해서 입력해주세요.'
      })
      .required('값을 입력해주세요.'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1'), null], '비밀번호가 일치하지 않습니다.')
      .required('값을 입력하세요.')
  });

  const handleSubmit = async (values) => {
    try {
<<<<<<< HEAD
      await axios.post('http://localhost:8080/members/new', values);
      alert('회원가입 성공');
      navigate('/');
=======
      await axios.post('백앤드 매핑 주소', values);
      alert('회원가입 성공');
>>>>>>> 6576008f5d4b180701fdf7af6ef5d5a5fea2c296
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <RegisterLayout>
      <RegisterH1>회원가입을 진행해주세요.</RegisterH1>
      <RegisterH2>
        계정이 있으신가요?
        <RegisterLinkBule>
          <Link to={'/login'}>로그인하기 {'>'}</Link>
        </RegisterLinkBule>
      </RegisterH2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <RegisterForm>
          <RegisterFieldBox>
            <Field name="name" placeholder="이름" />
            <ErrorMessage name="name" component="p" />
          </RegisterFieldBox>
          <RegisterFieldBox>
            <Field name="nickname" placeholder="닉네임" />
            <ErrorMessage name="nickname" component="p" />
          </RegisterFieldBox>
          <RegisterFieldBox>
            <Field name="email" placeholder="이메일" />
            <ErrorMessage name="email" component="p" />
            {/* <RegisterCheckButton>중복확인</RegisterCheckButton> */}
          </RegisterFieldBox>
          <RegisterFieldBox>
            <Field type="password" name="password1" placeholder="비밀번호" />
            <ErrorMessage name="password1" component="p" />
          </RegisterFieldBox>
          <RegisterFieldBox>
            <Field type="password" name="password2" placeholder="비밀번호 확인" />
            <ErrorMessage name="password2" component="p" />
          </RegisterFieldBox>
          <RegisterButton type="submit">회원가입</RegisterButton>
          {error && <ErrorMessageText>{error}</ErrorMessageText>}
        </RegisterForm>
      </Formik>
      <RegisterBox>
        <RegisterBoxSubText>
          <Link to="/login">로그인</Link>
          <span>|</span>
          <Link to="/login">아이디 찾기</Link>
          <span>|</span>
          <Link to="/login">비밀번호 찾기</Link>
        </RegisterBoxSubText>
      </RegisterBox>
      <RegisterText>
        <Hr />
        다른 방법으로 회원가입
        <Hr />
      </RegisterText>
      <RegisterBox>
        <RegisterItem type="kakao">
          <RegisterImage src="/images/kakao-talk.png" />
          카카오 회원가입
        </RegisterItem>
        <RegisterItem>
          <RegisterImage src="/images/naverLogo.png" />
          네이버 회원가입
        </RegisterItem>
      </RegisterBox>
    </RegisterLayout>
  );
};

export default Register;

const RegisterLayout = styled.div`
  padding: 60px;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RegisterH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const RegisterH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 3rem;
  color: #555;
  a:link {
    color: #3867d6;
  }
  a:visited {
    color: #3867d6;
  }
`;

const RegisterLinkBule = styled.span`
  margin-left: 8px;
`;

const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const RegisterFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    padding: 14px 12px;
    &:focus {
      border-color: #3867d6;
    }
  }
  p {
    font-size: 14px;
    color: red;
    margin-top: 5px;
  }
`;

const RegisterCheckButton = styled.button`
  margin-top: 10px;
  align-self: flex-start;
  padding: 10px 20px;
  background-color: #e5e5e5;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
`;

const RegisterButton = styled.button`
  padding: 15px;
  background-color: #3b64e6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2a48bd;
  }
`;

const ErrorMessageText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const RegisterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterBoxSubText = styled.div`
  display: flex;
  color: #464646;
  gap: 12px;
  padding: 2rem;
  a {
    text-decoration: none;
    color: #464646;
  }
`;

const RegisterText = styled.div`
  display: flex;
  justify-content: center;
  color: #818181;
  margin: 2rem 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  span {
    margin: 0 10px;
  }
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfdfdf;
  width: 100%;
`;

const RegisterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.type === 'kakao' ? '#FFEB3B' : '#00BF18')};
  color: ${(props) => (props.type === 'kakao' ? '#2C2700' : '#ffffff')};
  width: 270px;
  height: 65px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const RegisterImage = styled.img`
  width: 30px;
  margin-right: 10px;
  object-fit: cover;
`;
