import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import SLIDEIMG01 from "../../assets/img/banner01.jpg";
import SLIDEIMG02 from "../../assets/img/banner02.jpg";
import SLIDEIMG03 from "../../assets/img/banner03.jpg";
import SLIDEIMG04 from "../../assets/img/banner04.jpg";

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
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="cursor-grab">
            <img src={SLIDEIMG01} className="w-full aspect-banner" />
          </SwiperSlide>
          <SwiperSlide className="cursor-grab">
            <img src={SLIDEIMG02} className="w-full aspect-banner" />
          </SwiperSlide>
          {/* <SwiperSlide className="cursor-grab">
            <img src={SLIDEIMG03} className="w-full aspect-banner" />
          </SwiperSlide> */}
          <SwiperSlide className="cursor-grab">
            <img src={SLIDEIMG04} className="w-full aspect-banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
