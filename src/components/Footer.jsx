import React from "react";
import FooterImg from "../assets/footer_img.png";
import { FaArrowRight } from "react-icons/fa";
import { ReactComponent as Icon1 } from "../assets/Icon (1).svg";
import { ReactComponent as Icon2 } from "../assets/Icon.svg";

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
      <h1 className="font-butler font-normal text-8xl leading-tight text-white mt-32">
        You can't buy happiness, but you can buy coffee, and that's pretty
        close.
      </h1>
      <div className="mx-auto flex h-20 w-2/5 rounded-2xl overflow-hidden">
        <input
          className="w-5/6 h-full text-2xl font-butler font-normal pl-4"
          placeholder="Enter your email"
          type="text"
          name=""
          id=""
        />
        <button className="w-1/6 text-center text-6xl h-full font-butler font-normal bg-primary">
          <FaArrowRight className="text-white mx-auto" />
        </button>
      </div>

      <div className="mb-8 flex gap-x-20 rounded-xl border border-borderPrimary p-16">
        <div className="flex gap-x-12">
          <Icon1 width={90} height={90} />
          <div className="">
            <h1 className="mb-4 text-3xl font-butler font-normal text-white">
              Our Opening Time
            </h1>
            <p className="text-lg text-white">
              Everyday : <span>11.30am-7pm</span>
            </p>
          </div>
        </div>
        <div className="h-24 w-[1px] bg-borderPrimary"></div>
        <div className="flex items-center gap-x-6 text-white text-5xl">
          <CgFacebook className="border border-borderPrimary rounded-full p-2" />
          <FaInstagram className="border border-borderPrimary rounded-full p-2" />
          <FaLinkedinIn className="border border-borderPrimary rounded-full p-2" />
          <FaTwitter className="border border-borderPrimary rounded-full p-2" />
        </div>
        <div className="h-24 w-[1px] bg-borderPrimary"></div>
        <div className="flex gap-x-12">
          <Icon2 width={90} height={90} />
          <div className="">
            <h1 className="mb-4 text-2xl font-butler font-normal text-white">
            House numer,Street number,<br /> Road numer,City name,Country
            </h1>
          </div>
        </div>
      </div>

      <p className="my-8 text-white font-butler font-normal text-2xl text-center">© Copyright 2021, All Rights Reserved by Coffee Time </p>
    </div>
  );
}
