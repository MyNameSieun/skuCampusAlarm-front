import styled from 'styled-components';

const Shuttle_2 = () => {
  return (
    <ShuttleLayout>
      <ShuttleBox>
        <div className="route">명학역 → 학교</div>
        <div className="separator"></div>
        <div className="timings">
          <span>오전: 08:10 ~ 10:50 (10분 간격 운행)</span>
          <span>저녁: 16:10 ~ 18:50 (10분 간격 운행)</span>
        </div>
      </ShuttleBox>
      <ShuttleBox>
        <div className="route">학교 → 명학역</div>
        <div className="separator"></div>
        <div className="timings">
          <span>오후: 16:00 ~ 18:40 (10분 간격 운행)</span>
          <span>밤: 21:20, 21:40 (2회 운행, 성결관 앞 출발)</span>
        </div>
      </ShuttleBox>
    </ShuttleLayout>
  );
};

export default Shuttle_2;

const ShuttleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ShuttleBox = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 30px;

  .route {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
  }

  .timings {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 5px;
      font-size: 16px;
    }
  }
`;
