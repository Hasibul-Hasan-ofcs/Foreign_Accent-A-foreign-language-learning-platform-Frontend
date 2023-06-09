import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import SLIDEIMG01 from "../../assets/img/slide01.jpg";
// import SLIDEIMG02 from "../../assets/img/slide02.jpg";
// import SLIDEIMG03 from "../../assets/img/slide03.png";

const Header = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 7000, // delay between slides in milliseconds
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SLIDEIMG01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SLIDEIMG01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SLIDEIMG01} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
