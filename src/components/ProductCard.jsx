import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function ProductCard({
    CoffeeImage
}) {
  return (
    <div className="w-[550px] h-[630px] bg-secondary rounded-2xl p-6 relative">
    <p className="flex gap-x-2 absolute top-14 left-12  bg-primary text-white rounded-2xl py-1 px-4">
      <span className="font-butler font-bold text-2xl leading-none">
        4.9
      </span>
      <BsStarFill size={20} color="white" />
    </p>
    <img
      src={CoffeeImage}
      alt="bg coffee"
      className=" w-[502px] h-[341px] object-cover rounded-xl"
    />
    <div className="mt-6 ">
      <div className="flex justify-between">
        <p className="text-4xl font-butler font-bold text-white">
          Cappuccino
        </p>
        <p className="text-4xl font-butler font-normal text-white">23k</p>
      </div>
      <p className="text-white mt-2 mb-6 text-xl font-butler font-normal w-3/4">
        Boost your productivity and build your mood with a short .
      </p>
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <button className="font-butler font-bold text-xl leading-none px-8  border border-accent text-primary rounded-lg">
            Hot
          </button>
          <button className="font-butler font-bold text-xl leading-none px-8  border border-accent text-primary rounded-lg">
            Cold
          </button>
        </div>
        <div className="bg-[#723e2a] p-4 rounded-full">
          <HiOutlineShoppingCart size={30} className="text-primary" />
        </div>
      </div>
    </div>
  </div>
  )
}
