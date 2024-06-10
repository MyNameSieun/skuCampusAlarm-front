import styled from 'styled-components';

// 졸업학점 계산기(id=1)
const GradCalc = () => {
  return (
    <GradCalcLayout>
      <GradCalcBox>
        <div>성결대학교 졸업학점 계산기는 성결대 멋쟁이사자처럼에서 제작했습니다.</div>
        <div>이 계산기는 그래프로 학점 증감을 시각화하여 성적 현황을 한눈에 확인할 수 있도록 도와줍니다.</div>
        <div>또한, 졸업 요건과 남은 재수강 강의 목록도 확인할 수 있습니다.</div>
      </GradCalcBox>
    </GradCalcLayout>
  );
};

export default GradCalc;

const GradCalcLayout = styled.div``;
const GradCalcBox = styled.div`
  div {
    padding: 1rem 0;
  }
`;
