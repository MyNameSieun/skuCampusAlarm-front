// 셔틀버스
import styled from 'styled-components';

const Shuttle_2 = () => {
  return (
    <ShuttleLayout>
      <ShuttleBox>
        <div>명학역 → 학교</div>
        <div>
          <span> 오전 : 08:10 ~ 10:50 (10분 간격 운행)</span>
          <span>저녁 : 16:10 ~ 18:50 (10분 간격 운행)</span>
        </div>
      </ShuttleBox>
      <ShuttleBox>
        <div>학교 → 명학역</div>
        <div>
          <span>오후 : 16:00 ~ 18:40(10분 간격 운행)</span>
          <span>밤 : 21:20, 21:40 (2회 운행, 성결관 앞 출발)</span>
        </div>
      </ShuttleBox>
    </ShuttleLayout>
  );
};

export default Shuttle_2;

const ShuttleLayout = styled.div``;

const ShuttleBox = styled.div``;
