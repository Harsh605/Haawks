import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Missionvision from "./components/Missionvision";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Tokenomics from "./components/Tokenomics";
import Roadmapcarousel from "./components/Roadmapcarousel";
import Team from "./components/Team";
import Ctawimage from "./components/Ctawimage";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Missionvision />
      <Services />
      <Newsletter />
      <Tokenomics />
      <Roadmapcarousel />
      <Team />
      <Ctawimage />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
