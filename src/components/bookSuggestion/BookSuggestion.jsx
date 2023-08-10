import React from "react";
import Ztext from "react-ztext";
import book from "../../assets/img/spanish_book.jpg";
import check from "../../assets/png/check.png";
import amazon from "../../assets/png/amazon.png";
import { Link } from "react-router-dom";
import ThemeButton from "../buttons/ThemeButton";

const dataArr = [
  {
    nameL: "spanish",
    data: [
      "Expanded coverage of grammar, verb conjugations, and pronunciations",
      "A refreshed and expanded mini-dictionary complete with even more essential vocabulary, exercises, and more",
      "A revamped and expanded bonus CD-ROM that includes real-life dialogue to aid in your learning Whether you’re looking to learn Spanish for use in the home, class, at the office, or on the go, Spanish For Dummies, 2nd edition has you covered!",
    ],
    url: "https://www.amazon.com/Spanish-Dummies-Susana-Wald/dp/047087855X",
  },
];

const BookSuggestion = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row py-20">
      <div className="w-full lg:w-1/2 ps-2 pe-2 lg:pe-8 py-7 lg:py-0 flex flex-col items-center lg:items-start">
        <span className="text-base theme-bg text-white px-4 py-1 rounded-full">
          Book Suggestion for today
        </span>
        {dataArr.map((el, indx) => (
          <div key={indx}>
            <h1 className="font-semibold text-3xl lg:text-4xl text-gray-900  text-center lg:text-start pt-8">
              Spanish for Dummies
            </h1>
            <ul className="py-8 flex flex-col">
              <div key={indx} className="flex flex-col gap-4">
                {el.data.map((el2, indx2) => (
                  <li
                    className="text-base text-gray-700 flex gap-2"
                    key={indx2 + 2}
                  >
                    <img src={check} className="h-5 w-5" />
                    <span>{el2}</span>
                  </li>
                ))}
              </div>
            </ul>

            <div className="flex flex-col items-start gap-4 w-full py-5">
              <span className="text-gray-800">Purchase from</span>
              <Link to={el.url} target="_blank">
                <ThemeButton imgurl={amazon}></ThemeButton>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/2 min-h-[500px] pe-2 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full rounded-full bg-[#F4F7FB] aspect-square"></div>
        <Ztext
          depth="3rem"
          direction="both"
          event="pointer"
          eventRotation="30deg"
          eventDirection="default"
          fade={false}
          layers={20}
          perspective="1000px"
          style={{
            fontSize: "4rem",
          }}
        >
          <img src={book} className="h-72 lg:h-96" />
        </Ztext>
      </div>
    </div>
  );
};

export default BookSuggestion;
