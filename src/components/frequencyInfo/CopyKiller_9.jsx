import styled from 'styled-components';

const CopyKiller_9 = () => {
  return (
    <CopyKillerLayout>
      <StepBox>
        <Step>
          <StepNumber>1.</StepNumber>
          <StepDescription>성결대공홈</StepDescription>
        </Step>
      </StepBox>
      <StepBox>
        <Step>
          <StepNumber>2.</StepNumber>
          <StepDescription>quick</StepDescription>
        </Step>
      </StepBox>
      <StepBox>
        <Step>
          <StepNumber>3.</StepNumber>
          <StepDescription>우측상단 로그인 후 통합로그인 선택</StepDescription>
        </Step>
      </StepBox>
      <StepBox>
        <Step>
          <StepNumber>4.</StepNumber>
          <StepDescription>학습연구지원 → 카피킬러 → 문서업로드</StepDescription>
        </Step>
      </StepBox>
      <Note>비교범위는 건드리지 않아도 됩니다. 그냥 돌리면 됩니다.</Note>
    </CopyKillerLayout>
  );
};

export default CopyKiller_9;

const CopyKillerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StepBox = styled.div`
  width: 600px;
  border: 2px solid #333;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const StepNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const StepDescription = styled.p`
  font-size: 18px;
`;

const Note = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-style: italic;
  color: #666;
`;
