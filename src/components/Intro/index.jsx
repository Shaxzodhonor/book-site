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
import Book5 from "../../assets/images/book_all.png"

function Intro() {
  function Btn(){
    window.scrollTo(0,1200)
  }
  return(
  <div id="intro" className="container">
    <div className="left">
      <h1 className="title">Киниги от  А до Я</h1>
      <div className="subtitle">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные сюжеты.</div>
      <button type="button" onClick={Btn}>Перейти в каталог</button>
    </div>
    <div className="right">
    <Swiper
        // install Swiper modules
        slidesPerView={1}
        spaceBetween={30}
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
          <img src={Book5} alt="book" width={"90%"} height={"90%"} />
          <div className="text-wrap">
            <div className="title">Комплект книг Марка Мэнсона</div>
            <div className="auth">
            ТОНКОЕ ИСКУССТВО ПОФИГИЗМА. ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.
            </div>
            <div className="price">649 грн.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book5} alt="book" width={"90%"} height={"90%"} />
          <div className="text-wrap">
            <div className="title">Комплект книг Марка Мэнсона</div>
            <div className="auth">
            ТОНКОЕ ИСКУССТВО ПОФИГИЗМА. ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.
            </div>
            <div className="price">649 грн.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book5} alt="book" width={"90%"} height={"90%"} />
          <div className="text-wrap">
            <div className="title">Комплект книг Марка Мэнсона</div>
            <div className="auth">
            ТОНКОЕ ИСКУССТВО ПОФИГИЗМА. ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.
            </div>
            <div className="price">649 грн.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book5} alt="book" width={"90%"} height={"90%"} />
          <div className="text-wrap">
            <div className="title">Комплект книг Марка Мэнсона</div>
            <div className="auth">
            ТОНКОЕ ИСКУССТВО ПОФИГИЗМА. ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.
            </div>
            <div className="price">649 грн.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Book5} alt="book" width={"90%"} height={"90%"} />
          <div className="text-wrap">
            <div className="title">Комплект книг Марка Мэнсона</div>
            <div className="auth">
            ТОНКОЕ ИСКУССТВО ПОФИГИЗМА. ВСЕ ХРЕНОВО. МУЖСКИЕ ПРАВИЛА.
            </div>
            <div className="price">649 грн.</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Intro;