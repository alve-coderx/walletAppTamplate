import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";
import Footer from "./Footer";
import Wallet from "./Wallet";
import WalletNames from "./WalletNames";

const links = [
  { name: "PRODUCTS", id: 1 },
  { name: "DOCS", id: 2 },
  { name: "EXPLORER", id: 3 },
];
const Navbar = () => {
  return (
    <header className="fixed z-10 top-0 w-full bg-black border-gray-600 border-b">
      <div className="p-3 flex items-center container mx-auto justify-between  w-full">
        <div className="flex items-center space-x-10">
          <NavLink to="/">
            <img src={logo} alt="logo" className="lg:w-64" />
          </NavLink>
          <div className="lg:flex items-center space-x-5 hidden">
            {links.map((item) => (
              <p key={item.id} className="text-white font-[600]">
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <button className="border lg:block md:block hidden rounded-full px-4 py-2 text-lg font-[600] text-white">
            DASHBOARD
          </button>
        </div>
      </div>
    </header>
  );
};

const Explorer = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="grid grid-cols-4 pt-20 container mx-auto justify-items-center ">
        <WalletNames />
        <Wallet />
      </div>
      <Footer />
    </div>
  );
};

export default Explorer;
