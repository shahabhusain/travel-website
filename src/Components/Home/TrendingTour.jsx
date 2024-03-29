import React from "react";
import main from "../../assets/main.png";
import main1 from "../../assets/main2.png";
import main2 from "../../assets/main3.png";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const TrendingTour = () => {
  return (
    <div className=" w-[90%] mx-auto mt-32">
      <h2 className=" text-[#DF6951] font-bold text-center">Trendy</h2>
      <h1 className=" xl:text-[53px] md:text-[33px] text-[25px] font-bold text-center">Our Trending Tour Packages</h1>
     <div className=" flex flex-col md:flex-row items-center gap-5 justify-between mt-24 ">
      {/*  */}
      <div className=" flex flex-col gap-2 hover:shadow-md py-4 px-3 rounded-md transition-all ease-in-out duration-300 w-full">
        <img className="" src={main} alt="" />
        <div className=" flex items-center justify-between">
          <h1 className=" flex items-center gap-2">
            <span>
              <CiCalendar />
            </span>
            8 days
          </h1>
          <h1 className=" flex items-center gap-2">
            <span>
              <CiUser />
            </span>
            25 People going
          </h1>
        </div>
        <h1 className=" xl:text-[42px] text-[30px] font-bold">Switzerland</h1>
        <h1 className=" flex items-center gap-2">
          <span>
            <CiLocationOn />
          </span>
          Europe
        </h1>
        <h1 className=" text-[#DF6951] md:text-[32px] text-[20px] font-medium">1000 $</h1>
        <p className=" md:text-[20px]">
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </p>
        <button className=" bg-[#DF6951] mt-4 py-3 w-fit px-6 text-white">
          Explore Now
        </button>
      </div>
      {/*  */}

         {/*  */}
         <div className=" flex flex-col gap-2 hover:shadow-md py-4 px-3 rounded-md transition-all ease-in-out duration-300 w-full">
        <img className="" src={main1} alt="" />
        <div className=" flex items-center justify-between">
          <h1 className=" flex items-center gap-2">
            <span>
              <CiCalendar />
            </span>
            8 days
          </h1>
          <h1 className=" flex items-center gap-2">
            <span>
              <CiUser />
            </span>
            25 People going
          </h1>
        </div>
        <h1 className=" xl:text-[42px] text-[30px] font-bold">Switzerland</h1>
        <h1 className=" flex items-center gap-2">
          <span>
            <CiLocationOn />
          </span>
          Europe
        </h1>
        <h1 className=" text-[#DF6951] md:text-[32px] text-[20px] font-medium">1000 $</h1>
        <p className=" md:text-[20px]">
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </p>
        <button className=" bg-[#DF6951] mt-4 py-3 w-fit px-6 text-white">
          Explore Now
        </button>
      </div>
      {/*  */}
           {/*  */}
      <div className=" flex flex-col gap-2 hover:shadow-md py-4 px-3 rounded-md transition-all ease-in-out duration-300 w-full">
        <img className="" src={main2} alt="" />
        <div className=" flex items-center justify-between">
          <h1 className=" flex items-center gap-2">
            <span>
              <CiCalendar />
            </span>
            8 days
          </h1>
          <h1 className=" flex items-center gap-2">
            <span>
              <CiUser />
            </span>
            25 People going
          </h1>
        </div>
        <h1 className=" xl:text-[42px] text-[30px] font-bold">Switzerland</h1>
        <h1 className=" flex items-center gap-2">
          <span>
            <CiLocationOn />
          </span>
          Europe
        </h1>
        <h1 className=" text-[#DF6951] md:text-[32px] text-[20px] font-medium">1000 $</h1>
        <p className=" md:text-[20px]">
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </p>
        <button className=" bg-[#DF6951] mt-4 py-3 w-fit px-6 text-white">
          Explore Now
        </button>
      </div>
      {/*  */}
     </div>
    </div>
  );
};

export default TrendingTour;
