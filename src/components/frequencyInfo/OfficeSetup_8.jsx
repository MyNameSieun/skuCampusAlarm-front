import React from 'react';
import styled from 'styled-components';

const OfficeSetup_8 = () => {
  return (
    <OfficeSetupLayout>
      <StepBox>
        <Step>
          <StepDescription>
            <StepText>
              <Bold>1. 로그인하기</Bold>
              <br />
              크롬으로 <Link href="https://mail.sungkyul.ac.kr">https://mail.sungkyul.ac.kr</Link>에 접속 후 포탈
              계정으로 로그인합니다.
            </StepText>
          </StepDescription>
        </Step>
      </StepBox>
      <IconImage src="/images/OfficeSetup/1.png" alt="Step 1 Icon" />
      <StepBox>
        <Step>
          <StepDescription>
            <StepText>
              <Bold>2. 회원 가입하기</Bold>
              <br />
              가입 및 동의 절차를 거치지 않은 경우 아이콘이 흑백으로 보입니다. <br /> MS Office(엑셀,워드,파워포인트
              등)는 2)를 클릭하여 가입하고 동의절차를 거쳐야 사용할 수 있습니다. <br /> G Suite은 3)을 클릭하여 가입하고
              동의 절차를 거쳐야 Gmail 등을 사용할 수 있습니다.
            </StepText>
          </StepDescription>
        </Step>
      </StepBox>
      <IconImage src="/images/OfficeSetup/2.png" alt="Step 2 Icon" />
      <StepBox>
        <Step>
          <StepDescription>
            <StepText>
              <Bold>3. 가입 및 동의 절차 화면</Bold>
              <br />
              1) 동의를 클릭하여 체크합니다. <br /> 2) 계정을 생성합니다. <br />
              3) 정상적으로 가입하면 아이콘색이 컬러로 변경됩니다. <br /> 4) MS 및 구글 사용 조건에 동의합니다. 모든
              절차는 PC에서 크롬으로 진행하시기를 권장합니다.
            </StepText>
          </StepDescription>
        </Step>
      </StepBox>
      <IconImage src="/images/OfficeSetup/3.png" alt="Step 3 Icon" />
      <StepBox>
        <Step>
          <StepDescription>
            <StepText>
              <Bold>4. 사용 후 로그아웃</Bold>
              <br />
              사용 후에는 반드시 로그아웃으로 개인정보를 보호해 주시기 바랍니다.
            </StepText>
          </StepDescription>
        </Step>
      </StepBox>
    </OfficeSetupLayout>
  );
};

export default OfficeSetup_8;

const OfficeSetupLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StepBox = styled.div`
  margin-top: 3rem;
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
`;

const StepDescription = styled.div`
  font-size: 18px;
`;

const StepText = styled.p`
  margin: 0;
`;

const Bold = styled.span`
  font-weight: bold;
  font-size: 23px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const IconImage = styled.img`
  margin-left: 20px;
`;
