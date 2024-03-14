import React from "react";

const Upcomming = () => {
  return (
    <div className=" flex items-center justify-center mt-72">
      <div className=" bg-white py-8 px-16 rounded-md flex flex-col gap-8">
        <label className=" relative">
          <input
            className=" h-20 w-[33rem] px-6  border-2 rounded-lg border-back border-opacity-50 outline-none focus:border-blue-500 focus:text-back transition-all duration-200"
            type="text"
          />
          <span className=" text-xl text-black text-opacity-80 absolute left-0 top-[22px] mx-6 px-2 transition-all duration-200 input-text">
            Enter destination (country, region or city)
          </span>
        </label>

        <label className=" relative">
          <input
            className=" h-20 w-[33rem] px-6  border-2 rounded-lg border-back border-opacity-50 outline-none focus:border-blue-500 focus:text-back transition-all duration-200"
            type="text"
          />
          <span className=" text-xl text-black text-opacity-80 absolute left-0 top-[22px] mx-6 px-2 transition-all duration-200 input-text">
            Enter destination (country, region or city)
          </span>
        </label>
      </div>
    </div>
  );
};

export default Upcomming;
