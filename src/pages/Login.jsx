import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const initialValues = {
    email: '',
    password1: ''
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('유효한 이메일을 입력하세요.').required('값을 입력하세요.'),
    password1: Yup.string()
      .min(5, '비밀번호는 최소 5자 이상 입력하세요.')
      .matches(passwordRules, {
        message: '최소 5자, 1개 이상의 대문자, 소문자, 숫자를 포함해서 입력하세요.'
      })
      .required('값을 입력하세요.')
  });

  const handleLogin = async (values) => {
    try {
      await login(values);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <LoginLayout>
      <LoginH1>로그인을 진행해주세요.</LoginH1>
      <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
        <LoginForm>
          <Field name="email" type="email" placeholder="이메일" />
          <ErrorMessage name="email" component="p" />
          <Field name="password1" type="password" placeholder="비밀번호" />
          <ErrorMessage name="password1" component="p" />

          <LoginButton type="submit">로그인</LoginButton>
          {error && <ErrorMessageText>{error}</ErrorMessageText>}
        </LoginForm>
      </Formik>
      <LoginBox>
        <LoginBoxSubText>
          <Link to="/register">회원가입</Link>
          <span>|</span>
          <Link to="/login">아이디 찾기</Link>
          <span>|</span>
          <Link to="/login">비밀번호 찾기</Link>
        </LoginBoxSubText>
      </LoginBox>
      <LoginText>
        <Hr />
        다른 방법으로 로그인
        <Hr />
      </LoginText>
      <LoginBox>
        <LoginItem type="kakao">
          <LoginImage src="/images/kakao-talk.png" />
          카카오 로그인
        </LoginItem>
        <LoginItem>
          <LoginImage src="/images/naverLogo.png" />
          네이버 로그인
        </LoginItem>
      </LoginBox>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
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

const LoginH1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 32px;
  font-weight: bold;
  color: #333;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
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
    margin-top: -5px;
  }
`;

const LoginButton = styled.button`
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

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBoxSubText = styled.span`
  display: flex;
  justify-content: center;
  color: #464646;
  padding: 2rem;
  span {
    padding: 0 12px;
  }
`;

const LoginText = styled.span`
  display: flex;
  justify-content: center;
  color: #818181;
  margin: 2rem;
  white-space: nowrap;
  margin: 70px 0 30px 0;
  text-align: center;
  font-size: 14px;
`;

const LoginItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
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

const LoginImage = styled.img`
  width: 30px;
  margin-right: 10px;
  object-fit: cover;
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfdfdf;
  width: 100%;
`;

const ErrorMessageText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
