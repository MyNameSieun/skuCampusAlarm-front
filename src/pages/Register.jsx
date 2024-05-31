//
// 추후 리팩토링 : login 여부에 따른 조건부 렌더링 props로
//
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  return (
    <RegisterLayout>
      <RegisterH1>회원가입을 진행해주세요.</RegisterH1>
      <RegisterH2>
        계정이 있으신가요?
        <RegisterLinkBule>
          <Link to={'/login'}>로그인하기 {'>'}</Link>
        </RegisterLinkBule>
      </RegisterH2>
      <RegisterInput>
        <RegisterIdBox>
          <input type="id" placeholder="아이디" />
          <RegisterCheckButton>중복확인</RegisterCheckButton>
        </RegisterIdBox>
        <input type="password" placeholder="패스워드" />
        <input placeholder="비밀번호" />
        <input placeholder="비밀번호 확인" />
      </RegisterInput>
      <RegisterButon>회원가입</RegisterButon>
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
  flex-direction: column;
`;
const RegisterH1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const RegisterH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 3rem;
`;
const RegisterLinkBule = styled.span`
  color: #3867d6;
  margin-left: 8px;
  a:link {
    color: #3867d6;
  }
  a:visited {
    color: #3867d6;
  }
  a:active {
    color: #3867d6;
  }
`;
const RegisterInput = styled.div`
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
const RegisterIdBox = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 76%;
  }
`;
const RegisterCheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  color: #818181;
  background-color: #e5e5e5;
  width: 130px;
  cursor: pointer;
`;
const RegisterButon = styled.div`
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
const RegisterBox = styled.div`
  display: flex;
  justify-content: center;
`;
const RegisterBoxSubText = styled.span`
  display: flex;
  justify-content: center;
  color: #464646;
  padding: 2rem;
  span {
    padding: 0 12px;
  }
`;

const RegisterText = styled.span`
  display: flex;
  justify-content: center;
  color: #818181;
  margin: 2rem;
  white-space: nowrap;
  margin: 70px 0 30px 0;
`;
const RegisterItem = styled.li`
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
const RegisterImage = styled.img`
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
