import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function ProductCard({
    CoffeeImage
}) {
  return (
    <div className="w-[374px] h-[465px] bg-secondary rounded-2xl p-6 relative">
    <p className="flex gap-x-2 absolute top-8 left-8  bg-primary text-white rounded-[100px] py-1 px-2">
      <span className="font-butler font-bold text-lg leading-none">
        4.9
      </span>
      <BsStarFill size={16} color="white" />
    </p>
    <img
      src={CoffeeImage}
      alt="bg coffee"
      className=" w-[502px] h-[241px] object-cover rounded-xl"
    />
    <div className="mt-6 ">
      <div className="flex justify-between">
        <p className="text-2xl leading-normal font-butler font-bold text-white">
          Cappuccino
        </p>
        <p className="text-2xl leading-normal font-butler font-bold text-white">23k</p>
      </div>
      <p className="text-white mt-2 mb-6 text-base font-butler font-normal w-3/4">
        Boost your productivity and build your mood with a short .
      </p>
      <div className="flex justify-between">
        <div className="">
          <button className="font-butler font-bold text-lg py-[11px] leading-none px-6  h-10  border border-accent text-primary rounded-lg">
            Hot
          </button>
          <button className="ml-2 font-butler h-10 py-[11px] font-bold text-xl leading-none px-8  border border-accent text-primary rounded-lg">
            Cold
          </button>
        </div>
        <div className="bg-[#723e2a] p-2 rounded-full">
          <HiOutlineShoppingCart size={24} className="text-primary" />
        </div>
      </div>
    </div>
  </div>
  )
}
