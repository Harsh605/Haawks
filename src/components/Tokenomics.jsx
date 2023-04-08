import React from "react";
import { useRef } from "react";
import "./token.css";
import Donutchart from "./Donutchart";

const Tokenomics = () => {
  const dataMock = [
    { title: "Seed 4%", value: 4.0, color: "#3260ed", titlep: "Seed" },
    { title: "Private  7%", value: 7.0, color: "#8ca8ff", titlep: "Private" },
    {
      title: "Public Sale 10%",
      value: 10.0,
      color: "#7af0d1",
      titlep: "Public Sale",
    },
    {
      title: "Marketing 5%",
      value: 5.0,
      color: "#3290ed",
      titlep: "Marketing",
    },
    { title: "Team 14%", value: 14.0, color: "#7c7af0", titlep: "Team" },
    {
      title: "Strategic Funding 15% ",
      value: 15.0,
      color: "#32e4ed",
      titlep: "Strategic Funding",
    },
    {
      title: "Ecosystem Rewards 30% ",
      value: 30.0,
      color: "#32bbed",
      titlep: "Ecosystem",
    },
    {
      title: "Liquidity 5%",
      value: 5.0,
      color: "#4b00e2",
      titlep: "Liquidity",
    },
    {
      title: "Advisory 2.5%",
      value: 2.5,
      color: "#4bffe2",
      titlep: "Advisory",
    },
    {
      title: "Exchange Listing 0.5%",
      value: 0.5,
      color: "#d15900",
      titlep: "Exchange Listing",
    },
    {
      title: "Partnership 2%",
      value: 2.0,
      color: "#cee330",
      titlep: "Partnership",
    },
    {
      title: "Airdrop 5%",
      value: 5.0,
      color: "#cee330",
      titlep: "Airdrop",
    },
  ];

  const toolTip = useRef(null);
  return (
    <div className="bg-gradient-to-b from-[#000120] to-[#220056] py-8 px-4 md:pt-24 md:px-24 sm:p-14">
     
      <h1 className="bigHeading py-4 text-center font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] -translate-x-2/4">
          {" "}
          Tokenomics{" "}
        </span>
      </h1>
      <br />
      <div className="customTooltip" ref={toolTip}></div>
      <div className="pi-data tknTop flex justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-14" style={{maxWidth: "1200px", margin: "auto"}}>
          <div className="lg:w-1/4 sm:w-full">
            <p className="text-white text-justify text-lg ">
              “Based on 10% token release at TGE for Pre-Public sale investors
              and 50% token release for Public sale investors at TGE.
              <br /> There will be a vesting period of 24 months for all
              Pre-Public sale investors and 12 months for Public Sale investors
              and the tokens will be released on a monthly basis as per the
              token release schedule.
              <br /> Team tokens are locked for 6 months after TGE and will be
              vested for 18 months after that and released as per token release
              schedule.”
            </p>
          </div>
          <div className="mainPieCgar">
            <Donutchart />
          </div>
          <ul className="ul_data-list">
            <h5>Token Pools</h5>
            {dataMock &&
              dataMock.map((data, id) => {
                return (
                  <li key={id}>
                    <div> {data.titlep}</div> <span>{data.value}%</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      </div>

  );
};

export default Tokenomics;
