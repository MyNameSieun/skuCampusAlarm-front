import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

const SwiperImage = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{
        delay: 600,
        disableOnInteraction: false
      }}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlideImage>
        <SwiperSlide>
          <img src="images/캐러셀1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/캐러셀2.jpg" />
        </SwiperSlide>
      </SwiperSlideImage>
    </Swiper>
  );
};

const SwiperSlideImage = styled.div`
  width: 600px;
  height: 100px;
`;

export default SwiperImage;
