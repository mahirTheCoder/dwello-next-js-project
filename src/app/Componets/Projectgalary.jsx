import Image from "next/image";
import React from "react";
import galary1 from "../../../public/Images/Galary1.png";
import galary2 from "../../../public/Images/Galary2.png";
import galary4 from "../../../public/Images/Galary4.png";
import galary3 from "../../../public/Images/Galary.png";
const Projectgalary = () => {
  return (
    <>
      <section id="Opurbo Project Galary">
        <div className="container ">
          <div className="content-part lg:mt-[135px] mt-10">

            <div className="header flex flex-col lg:items-center">
              <h2 className="lg:text-[48px] text-2xl font-semibold font-inter text-[#09231E] lg:text-center mb-2">
                Project Gallery
              </h2>
              <p className="lg:text-lg text-xs font-normal font-inter lg:text-center text-[#4A5565] mb-20">
                Explore the visual journey of this remarkable project
              </p>
            </div>

            <div className="img-part 1">
              <div className="part-one flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 mb-6">
                {/* Image 1 */}
                <div className="relative lg:w-[620px] lg:h-80 w-78 h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={galary1}
                    alt="img1"
                    fill
                    className="object-cover object-center hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative lg:w-[620px] lg:h-80 w-78 h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={galary2}
                    alt="img2"
                    fill
                    className="object-cover object-center hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  />
                </div>
              </div>
            </div>

            <div className="img-part 1">
              <div className="part-one flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0 mb-6">
                {/* Image 1 */}
                <div className="relative lg:w-[620px] lg:h-80 w-78 h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={galary3}
                    alt="img1"
                    fill
                    className="object-cover object-center hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative lg:w-[620px] lg:h-80 w-78 h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={galary4}
                    alt="img2"
                    fill
                    className="object-cover object-center hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  />
                </div>
              </div>
            </div>

            {/* <div className="img-part">
              <div className="part-one flex justify-between flex-wrap mb-6">
                <Image src={galary3} width={620} height={320} alt="img" />
                <Image src={galary4} width={640} height={320} alt="img" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectgalary;
