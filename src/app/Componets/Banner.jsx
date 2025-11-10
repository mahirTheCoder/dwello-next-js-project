"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/Images/Banner.png";
import overlay from "../../../public/Images/Overlay.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarMinus } from "react-icons/fa6";

const Banner = () => {
  return (
    <section id="Opurbo Products Details Banner">
      {/* Banner Wrapper */}
      <div className="w-full h-[581px] relative">
        {/* Background Banner */}
        <Image
          src={banner}
          alt="Banner Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Image */}
        <Image
          src={overlay}
          alt="Banner Overlay"
          fill
          className="object-cover object-center opacity-70" // opacity দিয়ে dim effect
        />

        {/* Content part */}
        <div className="absolute inset-0 z-10 container ">
          <div className="mt-10">
            <Link
              href="/"
              className="w-[166px] h-9 bg-gray-600 border border-gray-400 rounded-lg text-[#FFF] font-inter text-sm font-medium flex gap-3 items-center justify-center"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </div>

          <h1 className="text-[48px] font-inter font-bold text-[#ffffff] lg:pt-[269px] pb-4">
            Green Valley Residences
          </h1>
          <div className="location-part flex gap-6">
            <Link
              href={"/"}
              className="flex items-center gap-2 text-[#FFFFFFE6] text-lg font-inter"
            >
              <GrLocation />
              <span>Dhaka</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-[#FFFFFFE6] text-lg font-inter"
            >
              <FaRegCalendarMinus  />
              <span>2024</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
