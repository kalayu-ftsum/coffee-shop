import React from 'react'
import Header from "../components/Header";
import CoffeeBgTop from "../assets/coffee_withcup_photo.png";
import CoffeeBgBottom from "../assets/coffee_withcup.png";

export default function Hero() {
  return (
    <div className="bg-background px-36 h-screen relative">
    <Header />
    <div className="absolute top-0 right-0 w-[950px] h-[30%]">
      <div
        className="relative ml-auto w-[816.26px] h-[310px] "
        style={{
          background:
            "linear-gradient(#1c0b04 0%, #1c0b04 53%, #1c0b04 100%)",
        }}
      >
        <img
          src={CoffeeBgTop}
          alt="bg coffee"
          className=" object-cover relative h-[237px] w-[710px] ml-auto"
          style={{
            boxShadow: "rgb(28 11 4 / 20%) 0px 0px 15px 10px",
          }}
        />
      </div>
    </div>
    <img
      src={CoffeeBgBottom}
      alt="bg coffee"
      className="absolute bottom-0 right-0 w-[1317.85px] h-[515px] object-cover"
    />
    <div className="text-white pt-10 absolute top-1/2 left-[135px] transform -translate-y-1/2">
      <div className="mb-14">
        <h1 className="font-butler font-bold leading-[120%] text-9xl mr-32">
          Enjoy Your Life With Coffee
        </h1>
        <p className="font-butler font-normal leading-[140%] text-lg w-[607px]">
          Boost your productivity and build your mood with a short break in
          the most comfortable place. Boost your productivity and build your
          mood with a short.
        </p>
      </div>
      <button className="font-butler font-bold text-lg leading-none px-6 py-4 rounded-lg bg-primary text-white">
        Explore more
      </button>
    </div>
  </div>
  )
}
