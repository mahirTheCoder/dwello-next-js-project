import Link from "next/link";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GiUnstableProjectile } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Overview = () => {
  return (
    <>
      <section id="Opurbo Overview section" className="mt-20">
        <div className="max-w-[1470px] mx-auto px-4">
          <div className="overviewContent flex justify-between flex-wrap">
            {/* --------text part--------- */}
            <div className="textPart">
              {/* ------------header ------- */}
              <h2 className="text-3xl font-semibold text-[#09231E] font-inter mb-4">
                Project Overview
              </h2>
              <p className="lg:w-[872px] w-80 lg:text-base text-xs font-normal text-[#4A5565] font-inter mb-12">
                A luxury residential complex featuring eco-friendly design and
                state-of-the-art amenities. Green Valley Residences combines
                sustainable living with modern comfort, offering residents a
                harmonious blend of nature and contemporary architecture.
              </p>

              {/* -----------features------- */}
              <div className="featuresBoth flex justify-between flex-wrap">
                <div className="Features-content">
                  <h2 className="text-xl font-semibold font-inter text-[#09231E] mb-4">
                    Key Features
                  </h2>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className=" lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Eco-friendly materials and construction methods
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Rainwater harvesting system
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Energy-efficient HVAC systems
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Modern fitness center and swimming pool
                    </p>
                  </div>
                </div>
                <div className="Features-content">
                  <h2 className="text-xl font-semibold font-inter text-[#09231E] mb-4">
                    Key Features
                  </h2>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Eco-friendly materials and construction methods
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Rainwater harvesting system
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Energy-efficient HVAC systems
                    </p>
                  </div>
                  <div className="iconText flex gap-2 items-center mb-3">
                    <IoCheckmarkDoneCircleOutline className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Modern fitness center and swimming pool
                    </p>
                  </div>
                </div>
              </div>

              {/* -----------ProjecSolutions------- */}
              <div className="ProjecSolutions mt-12">
                <h2 className="text-xl font-semibold font-inter text-[#09231E] mb-5">
                  Project Challenges & Solutions
                </h2>
                <div className="content lg:w-[872px] w-80 py-4 mb-4 bg-[#F9FAFB]">
                  <div className="iconText flex gap-2 items-center pl-4 mb-3">
                    <PiWarningCircleBold className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm w-80 lg:w-full  font-normal text-[#4A5565] font-inter ">
                      Implemented sustainable building practices while
                      maintaining budget
                    </p>
                  </div>
                </div>
                <div className="content lg:w-[872px] w-80  py-4 mb-4 bg-[#F9FAFB]">
                  <div className="iconText flex gap-2 items-center pl-4 mb-3">
                    <PiWarningCircleBold className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Implemented sustainable building practices while
                      maintaining budget
                    </p>
                  </div>
                </div>
                <div className="content lg:w-[872px] w-80  py-4 mb-4 bg-[#F9FAFB]">
                  <div className="iconText flex gap-2 items-center pl-4 mb-3">
                    <PiWarningCircleBold className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                      Implemented sustainable building practices while
                      maintaining budget
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------Project Information---------- */}

            <div className="projectPart lg:p-8 bg-[#F9FAFB] rounded-2xl m-auto">
              <div className="content p-8">
                <h2 className="lg:text-2xl text-xl font-semibold font-inter text-[#09231E] mb-6">
                  Project Information
                </h2>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-[#4A5565] lg:text-lg text-xs font-inter mb-2"
                >
                  <RiContactsLine />
                  <span>Client</span>
                </Link>

                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-6">
                  Green Valley Development Ltd.
                </h2>

                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-[#4A5565] lg:text-lg text-xs font-inter mb-2"
                >
                  <LuBuilding2 />
                  <span>Architect</span>
                </Link>
                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-6">
                  Rahman & Associates
                </h2>

                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-[#4A5565] lg:text-lg text-xs font-inter mb-2"
                >
                  <IoMdTime />
                  <span>Duration</span>
                </Link>
                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-6">
                  18 months
                </h2>

                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-[#4A5565] lg:text-lg text-xs font-inter mb-2"
                >
                  <GiUnstableProjectile />
                  <span>Project Size</span>
                </Link>
                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-6">
                  250,000 sq ft
                </h2>

                <Link
                  href={"/"}
                  className="flex items-center gap-3 text-[#4A5565] lg:text-lg text-xs font-inter mb-2"
                >
                  <GrLocation />
                  <span>Location</span>
                </Link>
                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-6">
                  Dhaka
                </h2>

                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-[#09231E] lg:text-lg text-xs font-inter"
                >
                  <FaRegCalendarMinus />
                  <span>Completion Year</span>
                </Link>
                <h2 className="lg:text-xl text-base font-semibold font-inter text-[#09231E] mb-8">
                  2024
                </h2>

               <hr className="text-[#D1D5DC] mb-8" />

               {/* -----------button--------- */}
               <Link href={'/'} className="text-sm font-medium font-inter py-3 px-8 flex  items-center bg-[#2E7D32] gap-3.5 justify-center text-white rounded-4xl" >
               <span>Start Your Project</span>
               <FaArrowRight />

               </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
