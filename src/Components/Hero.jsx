import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../Assets/hero.438e58ae.jpeg";
import herobg from "../Assets/herobg.PNG";
import logo_mark from "../Assets/logo_mark.84dd8525.svg";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="rounded-[70px] lg:min-h-[560px] lg:max-h-[800px] border  heroIm lg:block md:block hidden" />
      <img src={herobg} alt="hero" className="rounded-[70px] border  heroIm lg:hidden md:hidden block" />
      <div className="absolute top-40 w-full">
        <div className="flex flex-col items-center justify-center ">
          <img src={logo_mark} alt="logo_mark" className="w-20"/>
          <p className="lg:text-[6rem] text-[3rem] text-white font-[700]">Connecting </p>
          <p className="lg:text-[5rem] text-[2.5rem] text-white font-[700]"> web3</p>
          <p className="lg:text-xl text-sm font-[600]  text-center text-gray-400">
            The communications protocol for web3, WalletConnect
          </p>
          <p className="lg:text-xl text-sm font-[600]  text-center text-gray-400">
            brings the ecosystem together by enabling wallets and
          </p>
          <p className="lg:text-xl text-sm font-[600]  text-center text-gray-400">
            apps to securely connect and interact.
          </p>
          <NavLink to="/explorer">
            <button className="bg-white rounded-full lg:w-80 px-3 py-2 lg:text-xl font-[500] mt-10">
              Connect Your Wallet
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
