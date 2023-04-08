import React from 'react'
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Privacypolicy from './Privacypolicy';
function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#000120] to-[#220056]  lg:px-24 pt-14 px-10 pb-10" >
       <div style={{maxWidth:"1200px",margin:"auto"}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="text-[#4CC9F0] font-semibold lg:text-2xl">HAAWKS.</h1>
            <p className="text-white xl:w-[559px] pt-4">
            We aim to establish a secure space that instills confidence in investing in digital assets. Our platform provides essential resources to users, regardless of their level of expertise in the crypto investment realm
            </p>
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 md:grid-cols-1 pt-9">
              

              <div className="flex gap-2 text-white md:pt-4 pt-4 xl:pt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#3A0CA3] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <a href='mailto: contact@haawks.io'>
                  <p className="text-[#4CC9F0] text-sm">Contact us at</p>
                  <h3 className='footer-pages-btn' style={{userSelect:"all"}}>contact@haawks.io</h3>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-[#4CC9F0] font-semibold lg:text-xl md:pt-4 pt-4">
                Newsletter
              </h2>
              <p className="text-white xl:w-[555px] pt-4 pb-5">
                Be the first one to know about discounts, offers and events.
                Unsubscribe whenever you like.
              </p>
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  className="rounded-full px-4 py-3 bg-[#342F49] w-full input-p"
                ></input>
                <button className="homePageBtnHover text-white md:px-7 md:py-3 px-7 text-xs md:text-base rounded-full bg-[#6366F1] h-full absolute right-0 submit-btn hover:text-black hover:text-black c-btn tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-[#5558ff]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Submit
                  </span>
                  Submit
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-5 gap-4 socials">
              
              <div className="footer-social-btn relative overflow-hidden block footer-div cursor-pointer">
                <span className="block"><a target="_blank" href="https://www.linkedin.com/company/haawkschain">
                  <FaLinkedinIn className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </a></span>
              </div>
              <div className="footer-social-btn relative overflow-hidden block footer-div cursor-pointer" >
                <span className="block ">
                  <a target="_blank" href="https://t.me/haawkschain">
                  <TbBrandTelegram  className="text-white bg-[#7A7893]  rounded-full leading-4 p-2 h-8 w-8" />
                </a></span>
                
              </div>
              <div className="footer-social-btn relative overflow-hidden block footer-div cursor-pointer">
                <span className="block"><a target="_blank" href="https://twitter.com/Haawks_chain">
                  <FiTwitter className="text-white bg-[#7A7893] rounded-full leading-4 p-2 h-8 w-8" />
                </a></span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 md:grid-cols-1">
          <div className="md:flex justify-between text-white text-xs md:text-base flex-col lg:flex-row">
            <p><a className='footer-pages-btn' href="#about">About Us</a></p>
            <p><a className='footer-pages-btn' href="mailto: contact@haawks.io">Contact</a></p>
            <Privacypolicy />
            <p><a className='footer-pages-btn' href="#roadmap">Roadmap</a></p>
            <p className='footer-pages-btn cursor-pointer'>Terms of Use</p>
          </div>
          <div className=" text-white lg:justify-end justify-start pt-4 flex md:justify-start md:pt-4 text-xs md:text-base lg:pt-0">
            © 2000-2021, All Rights Reserved
          </div>
        </div>
    </div>
    </div>
  );
}

export default Footer