import "./style.scss";


// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/free-mode";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

// images
import Book1 from "../../assets/images/book-1.png"
import Book2 from "../../assets/images/book-2.png"
import Book3 from "../../assets/images/book-3.png"
import Book4 from "../../assets/images/book-4.png"
import Book5 from "../../assets/images/book-5.png"

function Intro() {

  return(
  <div id="intro" className="container">
    <div className="left">
      <h1 className="title">Киниги от  А до Я</h1>
      <div className="subtitle">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные сюжеты.</div>
      <button type="button">Перейти в каталог</button>
    </div>
    <div className="right">
    <Swiper
        // install Swiper modules
        slidesPerView={3}
        spaceBetween={-15 }
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide>
          <img src={Book2} alt="book" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book3} alt="book" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book4} alt="book" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book1} alt="book" width={"100%"} height={"100%"} />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Intro;