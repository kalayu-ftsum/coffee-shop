import React from "react";
import BeanImg from "../assets/Bean.png";

export default function Banner() {
  return (
    <div className="py-8 bg-primary flex px-8 items-center justify-between">
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
