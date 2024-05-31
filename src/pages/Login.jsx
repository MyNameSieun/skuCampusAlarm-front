import styled from 'styled-components';

const Login = () => {
  return (
    <LoginLayout>
      <LoginH1>로그인을 진행해주세요.</LoginH1>
      <LoginInput>
        <input type="id" placeholder="아이디" />
        <input type="password" placeholder="패스워드" />
      </LoginInput>
      <LoginButon>로그인</LoginButon>
      <LoginBox>
        <LoginBoxSubText>회원가입 | 아이디 찾기 | 비밀번호 찾기</LoginBoxSubText>
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
  flex-direction: column;
`;
const LoginH1 = styled.h1`
  margin-bottom: 3rem;
  font-size: 32px;
  font-weight: bold;
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;

  input {
    font-size: 18px;
    padding-left: 1rem;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    height: 65px;
  }
`;
const LoginButon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  color: white;
  margin-top: 2rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2a48bd;
  }
  cursor: pointer;
  background-color: #3b64e6;
  border-radius: 75px;
  color: white;
  margin-top: 2rem;
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
`;

const LoginText = styled.span`
  display: flex;
  justify-content: center;
  color: #818181;
  margin: 2rem;
  white-space: nowrap;
  margin: 70px 0 30px 0;
`;
const LoginItem = styled.li`
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
  font-size: 20px;
  font-weight: bold;
`;
const LoginImage = styled.img`
  width: 60px;
  object-fit: cover;
`;
const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfdfdf;
  width: 100%;
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
`;
