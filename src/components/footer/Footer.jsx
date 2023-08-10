import React, { useRef } from "react";
import LOGOMAIN from "../../assets/img/mainlogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import NewsLetter from "../newsletter/NewsLetter";

const Footer = () => {
  return (
    <div className="curve_line_bg_light  relative">
      <div className="bg-transparent">
        <footer className="footer container mx-auto px-10 pt-28 text-base-content">
          <div>
            <span className="footer-title text-slate-100">Services</span>
            <a className="link link-hover text-slate-300">Language Courses</a>
            <a className="link link-hover text-slate-300">Cultural Immersion</a>
            <a className="link link-hover text-slate-300">Language Levels</a>
            <a className="link link-hover text-slate-300">Small Class Sizes</a>
          </div>
          <div>
            <span className="footer-title text-slate-100">About</span>
            <a className="link link-hover text-slate-300">About Us</a>
            <a className="link link-hover text-slate-300">Our Team</a>
            <a className="link link-hover text-slate-300">Testimonials</a>
            <a className="link link-hover text-slate-300">FAQs</a>
          </div>
          <div>
            <span className="footer-title text-slate-100">Classes</span>
            <a className="link link-hover text-slate-300">English Speaking</a>
            <a className="link link-hover text-slate-300">Spanish Speaking</a>
            <a className="link link-hover text-slate-300">Arabic Speaking</a>
            <a className="link link-hover text-slate-300">Bengali Speaking</a>
            <a className="link link-hover text-slate-300">Japanese Speaking</a>
            <a className="link link-hover text-slate-300">Hindi Speaking</a>
          </div>
          <div>
            <span className="footer-title text-slate-100">
              Address & Contact
            </span>
            <div className="text-slate-300 flex flex-col gap-4">
              <p>
                123 Language Learning Avenue, <br /> Citytown, Countryville
              </p>

              <p>
                +1 (555) 123-4567 <br />
                info@languagesummerschool.com
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* <div className="bg-neutral"> */}
      <div className="bg-transparent">
        <footer className="footer container mx-auto items-center justify-between px-10 pt-10 pb-16  text-neutral-content">
          {/* <footer className="footer items-center p-4 bg-base-200 text-neutral-content"> */}
          <div className="items-center grid-flow-col">
            <img src={LOGOMAIN} className="h-11" />

            <a className="normal-case text-xl font-extrabold cursor-pointer font-mons">
              Foreign Accent
            </a>
          </div>
          <div>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.twitter.com">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://dribble.com">
              <FaDribbble className="text-2xl" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </footer>
      </div>
      <ToastContainer />
    </div>
  );
};

{
  /* 
 
 */
}

export default Footer;
