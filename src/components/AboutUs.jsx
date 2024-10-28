import React from "react";
import Heart from "../assets/heart.png";
import CupOne from "../assets/cup 1.png";
import CupTwo from "../assets/cup 2.png";
import CupThree from "../assets/cup 3.png";
import CupFour from "../assets/cup 4.png";

export default function AboutUs() {
  return (
    <div className=" mx-[135px] mt-[130px]" id="aboutus">
      <div className="flex justify-between">
        <img src={Heart} alt="heart coffee" className="w-[252px] h-[250px]" />
        <div>
          <h1 className="text-end text-8xl text-background font-butler font-extrabold mb-8">
            Our Shop
            <p className="text-end text-[64px]"> Our dream gallery</p>
          </h1>
          <p className="text-end ml-auto my-4 text-lg text-secondary font-butler font-normal  w-5/12">
            Boost your productivity and build your mood with a short break in
            the most comfortable place. Boost your productivity
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 my-8">
        <div
        className="flex flex-wrap flex-col gap-6"
        >

        <img
          src={CupThree}
          alt="heart coffee"
          className="rounded-3xl  w-[474px]  h-[237px]"
        />
        <div
        className="flex flex-wrap gap-6"
        >
        <img
          src={CupOne}
          alt="heart coffee"
          className="rounded-3xl w-[175px]  h-[237px]"
        />
        <img
          src={CupTwo}
          alt="heart coffee"
          className=" rounded-3xl w-[275px] h-[237px]"
        />

        </div>
        </div>
        <img
          src={CupFour}
          alt="heart coffee"
          className="rounded-3xl w-[672px] h-[498px]"
        />
      </div>
    </div>
  );
}
