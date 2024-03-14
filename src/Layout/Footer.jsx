import React from "react";
import logo from "../assets/logo1.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="back4 mt-12">
      <div className=" flex items-center justify-between w-[80%] mx-auto pt-24">
        <div className=" flex flex-col gap-3">
          <img className=" w-[155px]" src={logo} alt="" />
          <p className=" max-w-[222px]">Travel helps companies manage payments easily.</p>
          <div className=" flex items-center gap-6">
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" font-[800]">Company</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" font-[800]">Destinations</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" text-[22px] font-semibold">Join Our Newsletter</h1>
          <div className=" flex items-center">
            <input
              className="py-3 px-6 bg-[#EEEEFF]"
              type="text"
              placeholder="Your email Address"
            />
            <button className=" bg-[#DF6951] py-3 px-6 text-white ">
              Subscribe
            </button>
          </div>
          <p>* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
