import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";

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
                    <PiWarningCircleBold  className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm w-80 font-normal text-[#4A5565] font-inter ">
                     Implemented sustainable building practices while maintaining budget
                    </p>
                  </div>
                </div>
                <div className="content lg:w-[872px] w-80  py-4 mb-4 bg-[#F9FAFB]">
                  <div className="iconText flex gap-2 items-center pl-4 mb-3">
                    <PiWarningCircleBold  className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                     Implemented sustainable building practices while maintaining budget
                    </p>
                  </div>
                </div>
                <div className="content lg:w-[872px] w-80  py-4 mb-4 bg-[#F9FAFB]">
                  <div className="iconText flex gap-2 items-center pl-4 mb-3">
                    <PiWarningCircleBold  className="text-[#2E7D32]  text-base " />
                    <p className="  lg:text-base text-sm font-normal text-[#4A5565] font-inter ">
                     Implemented sustainable building practices while maintaining budget
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectPart w-106 h-166 bg-[#F9FAFB]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
