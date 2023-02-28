import React from "react";

const types = [
  { name: "TYPES", id: 1, head: true },
  { name: "Wallets", id: 2, head: false },
  { name: "Dapps", id: 3, head: false },
  { name: "Hybrid", id: 4, head: false },
];

const sdk = [
  { name: "SDK", id: 1, head: true },
  { name: "Sign v1", id: 2, head: false },
  { name: "Sign v2", id: 3, head: false },
];

const chains = [
  { name: "CHAINS", id: 1, head: true },
  { name: "Ethereum", id: 2, head: false },
  { name: "Solana", id: 3, head: false },
  { name: "Cosmos", id: 4, head: false },
];

const WalletNames = () => {
  return (
    <div className="lg:block md:block hidden">
      <p className="text-5xl font-[900] text-white ">Explorer</p>
      <div className="flex flex-col items-start space-y-4 mt-10">
        {types.map((item) => (
          <p
            key={item.id}
            className={
              item.head
                ? "text-slate-500 font-[400]"
                : "text-slate-400 font-[400]"
            }
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-start space-y-4 mt-10">
        {sdk.map((item) => (
          <p
            key={item.id}
            className={
              item.head
                ? "text-slate-500 font-[400]"
                : "text-slate-400 font-[400]"
            }
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-start space-y-4 mt-10">
        {chains.map((item) => (
          <p
            key={item.id}
            className={
              item.head
                ? "text-slate-500 font-[400]"
                : "text-slate-400 font-[400]"
            }
          >
            {item.name}
          </p>
        ))}
      </div>
      <button className="border rounded-full px-4 py-2 text-lg font-[600] text-white mt-5">
        Submit Project
      </button>
    </div>
  );
};

export default WalletNames;
