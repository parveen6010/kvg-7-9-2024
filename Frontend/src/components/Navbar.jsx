import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgFormatJustify, CgCloseO } from "react-icons/cg";
import logo from "../resource/logokgv.jpg";
import { Book } from "./Book";
import { Button2 } from "./Button2";
// import "./Phone.css";

export const Navbar = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-[3.5rem] py-2 sticky top-0 z-50 items-center w-full bg-[#1e1e1e] min-[320px]:h-[4rem]">
      <div className="Desktop-manu flex justify-between gap-20 max-w-[1240px] mx-auto ">
        <div>
          <Link to={"/"} >
            <img
              src={logo}
              className="w-[40px] h-[40px]"
              loading="lazy"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="flex font-inter gap-14 text-lg text-white items-center hidden md:flex">
          <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
          <Link
            to={"/product"}
            className="hover:border-b-2 hover:border-[#52d831]"
          >
            Product
          </Link>
          <Link
            to={"/booking"}
            className="hover:border-b-2 hover:border-[#52d831]"
          >
            Booking
          </Link>
          <Link
            to={"/distribution"}
            className="hover:border-b-2 hover:border-[#52d831]"
          >
            Distributorship
          </Link>
          <Link
            to={"/contactUs"}
            className="hover:border-b-2 hover:border-[#52d831] mr-5"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex  justify-center items-center gap-2">
          <Book />
          <Button2 />
        </div>
        <div className="md:hidden flex items-center">
          {isMobileMenuOpen ? (
            <CgCloseO
              className=" close-navbar text-xl mr-2 text-white"
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            />
          ) : (
            <CgFormatJustify
              className="  menu-navbar  text-xl mr-2 text-white"
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className=" pt-4 pb-4 bg-black flex flex-col font-inter text-lg text-white items-center mt-2">
          <Link
            to={"/"}
            className="  hover:border-b-2 hover:border-[#52d831] mb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/product"}
            className="hover:border-b-2 hover:border-[#52d831] mb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            to={"/booking"}
            className="hover:border-b-2 hover:border-[#52d831] mb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Booking
          </Link>
          <Link
            to={"/distribution"}
            className="hover:border-b-2 hover:border-[#52d831] mb-2"
            onClick={() => setMobileMenuOpen(false)}
          >
           Distributer-Ship
          </Link>
          <Link
            to={"/contactUs"}
            className="hover:border-b-2 hover:border-[#52d831]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};
