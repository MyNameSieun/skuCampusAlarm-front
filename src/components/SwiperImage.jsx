import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import styled from 'styled-components';

const SwiperImage = () => {
  return (
    <SwiperImageContainer
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50} // 슬라이드간 거리
      slidesPerView={1} // 보여질 개수
      loop={true} //슬라이드 반복 여부
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 3000, // 자동 재생 시간 설정
        disableOnInteraction: false // 상호작용 후 자동 재생 유지 여부
      }}
      speed={900} // 슬라이드 전환 속도 (밀리초)
    >
      <SwiperSlide>
        <StyledImage src="images/캐러셀3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImage src="images/캐러셀2.jpg" />
      </SwiperSlide>
    </SwiperImageContainer>
  );
};

const SwiperImageContainer = styled(Swiper)`
  width: 60%;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

export default SwiperImage;
