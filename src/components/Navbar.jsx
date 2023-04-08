
import React from "react";
import Logo from '../images/haawks_white.png'
export default function Navbar() {
    function toogleUl() {
        var navbar = document.querySelector(".navbar")
        navbar.classList.toggle("nav_active")
    }
  return (
    <>

        
        <div className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-email">
                    <i className=" fa-solid fa-envelope"></i>
                    <a className=" " href="mailto: contact@haawks.io" target="_blank">contact@haawks.io</a>
                </div>
            </div>
            <div className="top-bar-right sm:flex sm:justify-center sm:mx-0">
                
                <a href="https://t.me/haawkschain" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.linkedin.com/company/haawkschain/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/Haawks_chain" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                


            </div>
        </div>
    
        <div className="stickbar navbar  bg-transparent">
            <img className="ml-4 sm:ml-8 h-16 w-16" src={Logo} alt="" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#dex">DEX</a></li>
                <li><a href="#nftmarketplace">NFT Marketplace</a></li>
                <li><a href="#layer1">Layer 1</a></li>
                <li><a href="#">Media</a></li>
                
                <button className="nav-query-btn querybtn bg-gradient-to-r from-[#F72585] to-[#7209B7] hover:from-[#7209B7] hover:to-[#F72585]">Connect</button>

            </ul>
            <div className="navbar-icon" onClick={toogleUl}>
                <i className="fa-solid fa-bars text-white"></i>
                <i className="fa-solid fa-xmark text-white"></i>
            </div>
        </div>
        
        

    
    </>
  );
}
