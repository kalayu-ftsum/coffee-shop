import React from "react";
import ProductsBg from "../assets/products_bg.png";
import CoffeeContent from "../assets/Content.png";
import CoffeeContent2 from "../assets/product_img1.png";
import CoffeeContent3 from "../assets/product.png";
import ProductCard from "./ProductCard";


export default function Products() {
  return (
    <div className="px-36 my-36 relative"
    id="specials"
    >
      <img
        src={ProductsBg}
        alt="bg coffee"
        className="absolute -top-36 right-0  w-[668px] h-[376px] object-cover z-0"
      />

           <button className="absolute right-36 top-48 font-butler font-bold text-lg leading-none px-8 py-4  border border-primary text-primary rounded-lg">
            See All
          </button>
      <h1 className="text-8xl text-background font-butler font-extrabold mb-8">
        The Coffee
        <p className="text-[64px]">We work with</p>
      </h1>
      <p className="my-4 text-lg text-secondary font-butler font-normal  w-5/12">
        Boost your productivity and build your mood with a short break in the
        most comfortable place.
      </p>
      <div className="flex gap-6 mt-10">
      <ProductCard CoffeeImage={CoffeeContent} />
      <ProductCard CoffeeImage={CoffeeContent2} />
      <ProductCard CoffeeImage={CoffeeContent3} />
      </div>
    </div>
  );
}
