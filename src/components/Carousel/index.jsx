// components
import Card from '../Card';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/free-mode";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

function Carousel({array}) {
  return(
      <Swiper
        // install Swiper modules
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
      >
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card></Card>
        </SwiperSlide>
      </Swiper>
  )
}

export default Carousel;