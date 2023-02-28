import React from "react";
import Hero from "./Hero";
import logo from "../Assets/logo.svg";

const links = [
  { name: "PRODUCTS", id: 1 },
  { name: "DOCS", id: 2 },
  { name: "EXPLORER", id: 3 },
];
const Navbar = () => {
  return (
    <header className="fixed top-2 w-full  ">
      <div className="glass rounded-full p-1 flex items-center container mx-auto justify-between navBg w-full">
        <div className="flex items-center space-x-10">
          <img src={logo} alt="logo" className="lg:w-64" />
          <div className="lg:flex hidden items-center space-x-5">
            {links.map((item) => (
              <p key={item.id} className="text-white font-[600]">
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <button className="border rounded-full px-4 py-2 lg:text-lg font-[600] text-white">
            DASHBOARD
          </button>
        </div>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <div className="bg-[#141414] h-screen">
      <Navbar />
      <div className="container mx-auto pt-16  ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
