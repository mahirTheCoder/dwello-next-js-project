"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/Images/Banner.png";

const Banner = () => {
  return (
    <section id="Opurbo Products Details Banner">
      {/* Banner Wrapper */}
      <div className="w-full h-[693px] relative">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content part */}
        
     
      </div>
    </section>
  );
};

export default Banner;
