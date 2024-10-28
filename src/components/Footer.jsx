import React from "react";
import FooterImg from "../assets/footer_img.png";
import { FaArrowRight } from "react-icons/fa";
import Icon1 from "../assets/Icon 1.png";
import Icon2  from "../assets/Icon 2.png";

import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        background: `url('${FooterImg}') no-repeat, #452012`,
        backgroundSize: "cover",
      }}
      className="flex flex-col gap-y-10 px-36"
    >
      <h1 className="font-butler font-normal text-7xl leading-tight text-white mt-32">
        You can't buy happiness, but you can buy coffee, and that's pretty
        close.
      </h1>
      <div className="mx-auto flex h-10 w-[237px] rounded-lg overflow-hidden">
        <input
          className="w-[189px] h-full text-xs font-butler font-normal pl-4"
          placeholder="Enter your email"
          type="text"
          name=""
          id=""
        />
        <button className="text-center text-[20px] h-[40px] w-[48px] bg-primary">
          <FaArrowRight className="text-white mx-auto" />
        </button>
      </div>

      <div className="mb-8 flex gap-x-[60px] rounded-lg border border-borderPrimary p-8">
        <div className="flex gap-x-12">
        <img src={Icon1} alt="bean image" className=" object-cover h-[66px] w-[66px]" />
          <div className="">
            <h1 className="mb-4 text-base font-butler font-normal text-white">
              Our Opening Time
            </h1>
            <p className="text-xs text-white">
              Everyday : <span>11.30am-7pm</span>
            </p>
          </div>
        </div>
        <div className="h-24 w-[1px] bg-borderPrimary"></div>
        <div className="flex items-center gap-x-6 text-white text-4xl">
          <CgFacebook className="border border-borderPrimary rounded-full p-1" />
          <FaInstagram className="border border-borderPrimary rounded-full p-1" />
          <FaLinkedinIn className="border border-borderPrimary rounded-full p-1" />
          <FaTwitter className="border border-borderPrimary rounded-full p-1" />
        </div>
        <div className="h-24 w-[1px] bg-borderPrimary"></div>
        <div className="flex gap-x-12">
        <img src={Icon2} alt="bean image" className=" object-cover h-[66px] w-[66px]" />
          <div className="">
            <h1 className="mb-4 text-xs leading-[250%] font-butler font-normal text-white">
            House numer,Street number,<br /> Road numer,City name,Country
            </h1>
          </div>
        </div>
      </div>

      <p className="my-8 text-white font-butler font-normal text-xs leading-[250%] text-center">© Copyright 2021, All Rights Reserved by Coffee Time</p>
    </div>
  );
}
