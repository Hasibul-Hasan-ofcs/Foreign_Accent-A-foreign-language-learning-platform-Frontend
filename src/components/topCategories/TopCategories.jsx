import React from "react";
import CommonTitle from "../common/CommonTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper";
import "./topCategories.css";
import English from "../../assets/png/english_british.png";
import Arabic from "../../assets/png/arabic.png";
import Bengali from "../../assets/png/bangla.png";
import Chinese from "../../assets/png/chinese.png";
import Japanese from "../../assets/png/japanese.png";
import Hindi from "../../assets/png/hindi_india.png";
import Urdu from "../../assets/png/urdu_pakistan.png";
import Russian from "../../assets/png/russian.png";

const langArr = [
  {
    flag: English,
    lang: `English`,
    course: "12+",
  },
  {
    flag: Arabic,
    lang: `Arabic`,
    course: "12+",
  },
  {
    flag: Bengali,
    lang: `Bengali`,
    course: "12+",
  },
  {
    flag: Chinese,
    lang: `Chinese`,
    course: "12+",
  },
  {
    flag: Japanese,
    lang: `Japanese`,
    course: "12+",
  },
  {
    flag: Hindi,
    lang: `Hindi`,
    course: "12+",
  },
  {
    flag: Urdu,
    lang: `Urdu`,
    course: "12+",
  },
  {
    flag: Russian,
    lang: `Russian`,
    course: "12+",
  },
];

const TopCategories = () => {
  return (
    <div className="container mx-auto py-20 lg:px-20">
      <CommonTitle
        mainTitle="Top Categories"
        subTitle="Most popular and searched categories"
      ></CommonTitle>

      <div className="pt-20">
        <Swiper
          spaceBetween={2}
          // freeMode={true}
          pagination={{
            clickable: true,
          }}
          // modules={[FreeMode, Pagination, Autoplay]}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper"
          style={{ minHeight: "55vh" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {langArr.map((el, indx) => (
            <SwiperSlide style={{ background: "transparent" }} key={indx}>
              {/* <div className="rounded-lg swiper-card flex flex-col items-center w-full lg:w-40 p-6"> */}
              <div className="rounded-2xl shadow-lg border flex flex-col items-center w-full lg:w-60 p-6">
                <div className="rounded-full shadow-md bg-white h-24 w-24 overflow-hidden">
                  <img src={el.flag} className="h-full w-full p-7" />
                </div>
                <h3 className="text-slate-900 pt-6 pb-4">
                  {el.lang} <br /> Speaking
                </h3>
                <p className="text-slate-700 text-sm">{el.course} courses</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCategories;
