import React from "react";
import Ctaimage from "../images/ctaimage.png";

const Ctawimage = () => {
  return (
    <div>
      <div className="bg-[#12122d] px-4 sm:px-16 md:px-24 overflow-hidden relative">
        <div
          style={{ maxWidth: "1200px", margin: "auto" }}
          className="flex-col flex-wrap sm:flex sm:flex-row sm:justify-center sm:items-center"
        >
          <div className=" w-full text-start lg:w-1/2 py-12 md:px-6 lg:py-0 xxl:px-0 z-20 flex flex-col justify-center items-center">
            <h2
              style={{ wordSpacing: "2px" }}
              className="smallHeading tracking-wide text-3xl font-extrabold text-bold text-white sm:text-4xl"
            >
              <span className="text-center sm:text-left lg:whitespace-nowrap sm:ml-6 md:ml-0 block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                Make the decentralized web
              </span>
              <span className="text-center sm:text-left lg:whitespace-nowrap sm:ml-6 md:ml-0 block text-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                a reality for everyone.
              </span>
            </h2>
            <div className="order-3 flex flex-col gap-4 mt-8 lg:mt-10 lg:flex-shrink-0 sm:flex sm:flex-row sm:mt-10">
              <a
                style={{ whiteSpace: "nowrap" }}
                className=" py-3 px-14 lg:py-4 lg:px-12  mx-6 bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585] text-white transition ease-in duration-200 text-center text-xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                target="_blank"
                href="https://drive.google.com/file/d/1li4WbmaF6u25MG6vvaS-t3v8F98yp6IG/view"
              >
                Read More
              </a>
              <button
                type="button"
                style={{ whiteSpace: "nowrap" }}
                className=" py-3 px-14 lg:py-4  lg:px-12   mx-6  bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585]  text-white  transition ease-in duration-200 text-center text-xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
              >
                Connect Now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img src={Ctaimage} className="md:w-3/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctawimage;
