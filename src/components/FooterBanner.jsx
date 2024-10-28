import React from "react";
import BeanImg from "../assets/Bean.png";

export default function Banner() {
  return (
    <div className="mt-10 py-8 bg-primary flex px-8 items-center justify-between relative">
        <div className="px-2 rounded-[100px] py-6 bg-primary border-4 border-dashed border-secondary  absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-x-4">
            <h1 className="text-[30px] leading-normal font-butler font-normal text-white">Since</h1>
            <h1 className="text-7xl leading-[130%] font-butler font-normal text-white">1945</h1>
            <img src={BeanImg} alt="bean image" className=" object-cover " />

        </div>

      <img src={BeanImg} alt="bean image" className=" object-cover " />

      <p className="text-4xl text-white font-butler font-black ">Cappuccino</p>

      <img src={BeanImg} alt="bean image" className=" object-cover " />
      <p className="text-4xl text-white font-butler font-black ">Expresso</p>

      <img src={BeanImg} alt="bean image" className=" object-cover " />
      <p className="text-4xl text-white font-butler font-black ">Moca</p>

      <img src={BeanImg} alt="bean image" className=" object-cover " />
      <p className="text-4xl text-white font-butler font-black ">Latte</p>

      <img src={BeanImg} alt="bean image" className=" object-cover " />
      <p className="text-4xl text-white font-butler font-black ">Americano</p>

      <img src={BeanImg} alt="bean image" className=" object-cover " />
    </div>
  );
}



