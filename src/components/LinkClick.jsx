import styled from 'styled-components';

const LinkClick = () => {
  return (
    <LinkClickLayout>
      <LinkClickList>
        <LinkClickShortcuts>
          <span>바로가기</span>
          <img src="/images/rightArrow.png" alt="rightArrow" />
        </LinkClickShortcuts>
        <Hr />
        <a href="https://www.sungkyul.ac.kr/skukr/index.do" target="_blank">
          <LinkClickItem>
            <img src="/images/skulogo1-img.png" alt="학교 홈" />
            <div>학교 홈</div>
          </LinkClickItem>
        </a>
        <Hr />
        <a href="https://cc.sungkyul.ac.kr/login.php" target="_blank">
          <LinkClickItem>
            <img src="/images/사이버캠퍼스.png" alt="사이버캠퍼스" />
            <div>사이버캠퍼스</div>
          </LinkClickItem>
        </a>
        <Hr />
        <a href="https://library.sungkyul.ac.kr/" target="_blank">
          <LinkClickItem>
            <img src="/images/학술정보관.png" alt="학술정보관" />
            <div>학술정보관</div>
          </LinkClickItem>
        </a>
        <Hr />
        <a
          href="https://www.sungkyul.ac.kr/skukr/343/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NiUyRmFydGNsTGlzdC5kbyUzRg%3D%3D"
          target="_blank"
        >
          <LinkClickItem>
            <img src="/images/speaker.png" alt="학사공지" />
            <div>학사공지</div>
          </LinkClickItem>
        </a>
        <Hr />
        <a
          href="https://www.sungkyul.ac.kr/skukr/313/subview.do?enc=Zm5jdDF8QEB8JTJGc2NoZHVsbWFuYWdlJTJGc2t1a3IlMkYzJTJGdmlldy5kbyUzRg%3D%3D"
          target="_blank"
        >
          <LinkClickItem>
            <img src="/images/schedule-color.png" alt="학사일정" />
            <div>학사일정</div>
          </LinkClickItem>
        </a>
        <Hr />
      </LinkClickList>
    </LinkClickLayout>
  );
};

const LinkClickLayout = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f6f8;
`;
const LinkClickShortcuts = styled.div`
  color: #3b64e6;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;

  img {
    color: #3b64e6;
    width: 22px;
    position: relative;
    top: 6px;
    left: 3px;
  }
`;
const LinkClickList = styled.ul`
  width: 13rem;
`;
const LinkClickItem = styled.li`
  display: flex;
  font-size: 14px;
  color: #464646;

  img {
    background-color: #ffffff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  div {
    margin: 20px;
  }
`;
const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfdfdf;
`;

export default LinkClick;
