"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
type res = {
  config: [];
  data: string;
  headers: string;
  request: string;
};
export default function Home() {
  const [symbol, setSymbol] = useState<string>("");
  const [price, setPrice] = useState<Number>(0);
  const [time, setTime] = useState<number>(Date.now());
  const [check, setCheck] = useState<string>("-");
  const Sendpost = async () => {
    const res = await axios.post("/api/sever", {
      symbol: symbol,
      price: 3500,
      timestamp: 1720291308739,
    });
    console.log(res);
    setCheck(res.data.tx_status);
    /*const status = await axios.get(
      `https://mock-node-wgqbnxruha-as.a.run.app/check/${res.data.tx_hash}`
    );
    console.log(status);*/
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Sendpost();
  };
  return (
    <main className="flex flex-col h-dvh justify-center align-middle items-center bg-gradient-to-r from-indigo-500  ">
      <div className="py-8 font-bold text-4xl">
        Transaction Broadcasting and Monitoring Client
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="flex justify-center items-center align-middle w-64 h-40  ">
          <input
            className="flex w-64 h-24 text-center text-black border-solid border-2 bg-gradient-to-r from-indigo-500 border-indigo-600 rounded-md font-bold  items-center align-middle placeholder:text-gray-600 placeholder:text-center"
            onChange={(e) => setSymbol(e.target.value)}
            type="text"
            placeholder="enter symbol such as ETH"
          />
        </div>
        <div className="flex justify-center items-center align-middle w-64 h-40 ">
          <input
            className="flex text-center w-64 h-24 border-solid border-2 bg-gradient-to-r from-indigo-500 border-indigo-600 rounded-md text-black font-bold items-center align-middle placeholder:text-gray-600 placeholder:text-center"
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            placeholder="enter price such as 4500"
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2 rounded-md text-white">
          Send post
        </button>
      </form>
      <div className="flex py-10 text-2xl">show status : {check}</div>
    </main>
  );
}
