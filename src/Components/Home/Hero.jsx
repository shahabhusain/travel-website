import React, { useState } from "react";
import vector from "../../assets/Vector.png";
import group from "../../assets/Group.png";
import { FaAngleDown } from "react-icons/fa6";
const Hero = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className=" back absolute top-0 xl:h-[940px] md:h-[777px] h-[640px]">
      <div className=" xl:mt-[240px] md:mt-[240px] mt-[160px] w-[80%] mx-auto flex flex-col gap-4">
        <img className=" w-[103px]" src={vector} alt="" />
        <h1 className=" xl:text-[54px] md:text-[33px] text-[25px] font-bold max-w-[655px] text-white">
          No matter where you’re going to, we’ll take you there
        </h1>
        <div className=" flex items-center gap-6 bg-[#ffffff8c] py-4 xl:px-12 md:px-6 px-2 relative w-fit">
          <div className=" flex items-center gap-12">
            <h1 className=" text-white xl:text-[22px] sm:text-[12px] text-[8px]">Where To?</h1>
            {/* <div className=" w-[2px] h-full bg-[#f8f8f8] text-[#fff]">.</div> */}
          </div>
          <div className=" flex items-center gap-6">
            <div>
              <h1 className=" text-white flex items-center gap-2 xl:text-[22px] sm:text-[12px] text-[8px]">
                Travel Type{" "}
                <span
                  className=" cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <FaAngleDown />
                </span>
              </h1>
            </div>
            
          </div>
          <div className=" flex items-center gap-6">
            <h1 className=" text-white flex items-center gap-2 xl:text-[22px] sm:text-[12px] text-[8px]">
              Duration{" "}
              <span
                className=" cursor-pointer"
                onClick={() => setOpen1(!open1)}
              >
                <FaAngleDown />
              </span>
            </h1>
            {/* <div className=" w-[2px] h-full bg-[#f8f8f8] text-[#fff]">.</div> */}
          </div>
          <button className=" bg-[#DF6951] py-3 px-6 text-white rounded-md xl:text-[22px] sm:text-[12px] text-[10px]">
            Submit
          </button>
        </div>
        {open ? (
          <div className=" bg-white py-3 px-3 absolute top-[37.5rem] left-[30rem]">
            <p>Hello</p>
          </div>
        ) : (
          ""
        )}

        {open1 ? (
          <div className=" bg-white py-3 px-3 absolute top-[37.5rem] left-[42rem]">
            <p>Hello</p>
            <p>Hi</p>
          </div>
        ) : (
          ""
        )}
        <div className=" flex flex-col md:flex-row items-center gap-5 mt-3">
          <img src={group} alt="" />
          <p className=" text-white md:text-start text-center">
            2,500 people booked Tommorowland Event in last 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
