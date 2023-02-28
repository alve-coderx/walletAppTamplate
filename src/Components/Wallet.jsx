import React from "react";
import rainbow from "../Assets/rainbow.webp";
import Modal from '../Components/Modal';

const Card = () => {
  return (
    <div className="min-w-[250px] h-[250px] bg-[#171923] rounded-xl shadow-xl relative">
      <img src={rainbow} alt="rainbow" className="ad" />
      <p className="border rounded-full px-2 bg-[#00000054] py-1 text-sm absolute top-2 right-2">
        Copy id
      </p>
      <div className="flex flex-col items-center justify-center h-full">
        <img src={rainbow} alt="rainbow" className="w-16 rounded-full" />
        <p className="text-xl font-[600] mt-5">Rainbow </p>
        <p className="text-md ">Wallet</p>
      </div>
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="lg:col-span-3 md:col-span-3 col-span-4">
      <Modal/>
    </div>
  );
};

export default Wallet;
