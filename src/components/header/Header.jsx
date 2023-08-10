import React from "react";
// Import Swiper React components
// import Globe from "../../assets/video/globe_480.mp4";
import Typewriter from "typewriter-effect";
import "./header.css";
import { HashLink } from "react-router-hash-link";
import ThemeButton from "../buttons/ThemeButton";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  // const videoRef = useRef();
  // const [playbackRate, setPlaybackRate] = useState(0.75);

  // useEffect(() => {
  //   videoRef.current.playbackRate = playbackRate;
  // }, [playbackRate]);

  return (
    <div className="w-full relative header_bg overflow-hidden">
      {/* <div
        className="w-full h-[200%] bg-white absolute top-1/2 left-1/2 -translate-x-[1%]
      -translate-y-1/4 -rotate-45 -z-10 lg:z-10"
      ></div> */}
      {/* <video
        // autoPlay
        muted
        loop
        id="myVideo"
        className="h-full w-full"
        ref={videoRef}
      >
        <source src={Globe} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}

      <div className="container mx-auto min-h-[500px] flex flex-col justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 ">
          <h1 className="text-5xl font-semibold text-white text-center">
            Learn{" "}
            <span className="">
              <Typewriter
                options={{
                  strings: ["Speaking!", "Connecting!", "Exploring!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          {/* <p className="text-base text-gray-800 font-semibold py-3 text-center lg:text-start">
            Embark on a linguistic journey with our immersive foreign language{" "}
            <br />
            learning platform. Explore diverse cultures through interactive{" "}
            <br />
            lessons, real-world conversations, and personalized progress <br />
            tracking, all in one enriching online experience.
          </p> */}
          <HashLink to="/#insIntro">
            <ThemeButton text1="Get" text2="Started"></ThemeButton>
          </HashLink>

          <div className="flex gap-2">
            <a
              href="https://www.twitter.com"
              className="flex justify-center items-center h-10 w-10 rounded-full bg-white transition-all hover:-translate-y-1"
            >
              <FaTwitter className="text-2xl text-gray-600" />
            </a>
            <a
              href="https://dribble.com"
              className="flex justify-center items-center h-10 w-10 rounded-full bg-white transition-all hover:-translate-y-1"
            >
              <FaDribbble className="text-2xl text-gray-600" />
            </a>
            <a
              href="https://www.instagram.com"
              className="flex justify-center items-center h-10 w-10 rounded-full bg-white transition-all hover:-translate-y-1"
            >
              <FaInstagram className="text-2xl text-gray-600" />
            </a>
            <a
              href="https://www.youtube.com"
              className="flex justify-center items-center h-10 w-10 rounded-full bg-white transition-all hover:-translate-y-1"
            >
              <FaYoutube className="text-2xl text-gray-600" />
            </a>
            <a
              href="https://www.facebook.com"
              className="flex justify-center items-center h-10 w-10 rounded-full bg-white transition-all hover:-translate-y-1"
            >
              <FaFacebook className="text-2xl text-gray-600" />
            </a>
          </div>
          {/* <form className="flex">
            <input
              type="text"
              placeholder="Ex. bengali"
              className="bg-white shadow px-4 w-4/5 rounded-s-md"
            />
            <button
              type="submit"
              className="flex items-center justify-center h-14 theme-bg text-white rounded-e-md
              hover:bg-green-500 px-9
              "
            >
              <FaSearch></FaSearch>
            </button>
          </form> */}
          {/* <h1 className="text-3xl font-semibold text-white">
            Elevate Your Skills with Personalized{" "}
            <span className="theme-text">Language</span> Learning!
          </h1> */}
        </div>
        {/* <div className="w-full lg:w-1/2 h-full relative"></div> */}
      </div>
    </div>
  );
};

export default Header;
