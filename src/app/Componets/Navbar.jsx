import React from "react";
import logo from "../../app/Images/logo (1).png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="navItems flex justify-between items-center py-10">
            <div className="img-part">
                <Link href={'#'}>
              <Image src={logo} alt="logo" width={93} height={29} />
                </Link>
            </div>
            <div className="menuItems flex gap-10">
              <a
                href="#"
                className="text-main text-lg font-bold font-poppins text "
              >
                Home
              </a>
              <a
                href="#"
                className="text-main text-lg font-bold font-poppins text "
              >
                Service
              </a>
              <a
                href="#"
                className="text-main text-lg font-bold font-poppins text "
              >
                Agents
              </a>
              <a
                href="#"
                className="text-main text-lg font-bold font-poppins text "
              >
                Contact
              </a>
            </div>
            <div className="search-login-button flex gap-10">
              <div className="serach-login flex gap-7">
                <button className="text-2xl text-main">
                  <FaSearch />
                </button>
                <button className="text-2xl text-main">
                  <RiContactsLine  />
                </button>
              </div>
              <div className="button">
                <Link className="py-2 px-5 bg-main rounded-lg text-white" href='#'>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
