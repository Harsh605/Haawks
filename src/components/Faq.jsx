import React from "react";
import "./faq.css";
import Frequentquestions from "./Frequentquestions";
import Frequentquestions2 from "./Frequentquestions2";

const Faq = () => {
  return (
    <div>
      <section className="faqs-container bg-gradient-to-t from-[#000120] to-[#220056] md:px-24 px-4">
        <div className="faqs" style={{margin:"auto"}}>
          <div style={{maxWidth:"1200px",margin:"auto"}}>
            <h1 className="bigHeading pt-0 sm:pt-4  pb-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0]">
                {" "}
                FAQs{" "}
              </span>
            </h1>

            <div className="accordion">
              <div className="flex sm:flex-row flex-col" style={{columnGap:"40px"}}>
                <div className=" sm:w-1/2 w-full">
                  <Frequentquestions />
                </div>
                <div className=" sm:w-1/2 w-full">
                  <Frequentquestions2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
