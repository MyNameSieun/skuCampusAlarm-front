import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate();

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
      await axios.post('http://localhost:8080/members/new', values);
      alert('회원가입 성공');
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <RegisterLayout>
      <RegisterH1>회원가입을 진행해주세요.</RegisterH1>
      <RegisterH2>
        계정이 있으신가요?
        <RegisterLinkBlue>
          <Link to={'/login'}>로그인하기 {'>'}</Link>
        </RegisterLinkBlue>
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
      {/* <RegisterBox>
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
      </RegisterBox> */}
    </RegisterLayout>
  );
};

export default Register;

const RegisterLayout = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 400px;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const RegisterH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const RegisterH2 = styled.h2`
  font-size: 16px;
  margin-bottom: 2rem;
  color: #555;
`;

const RegisterLinkBlue = styled.span`
  margin-left: 8px;
  a {
    text-decoration: none;
    color: #3867d6;
  }
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
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    &:focus {
      border-color: #4a90e2;
    }
  }
  p {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }
`;

const RegisterButton = styled.button`
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #357abd;
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
  background-color: ${(props) => (props.type === 'kakao' ? '#FEE500' : '#03C75A')};
  color: ${(props) => (props.type === 'kakao' ? '#3C1E1E' : '#ffffff')};
  width: 100%;
  max-width: 270px;
  height: 50px;
  margin: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RegisterImage = styled.img`
  width: 24px;
  margin-right: 8px;
  object-fit: cover;
`;
