import React from "react";
import { FaRegCalendar, FaUser } from "react-icons/fa";
import { packagesItem } from "../Data";
import { Link } from "react-router-dom";
import main from "../../assets/travles.png";
const Package = () => {
  return (
    <div className=" mt-[33rem]">
      <div className=" flex flex-col-reverse xl:flex-row gap-20  md:w-[80%] w-[90%] mx-auto">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
          {packagesItem.map((item) => (
            <div className=" hover:shadow-md hover:scale-[1.1] py-12 px-5 transition-all ease-in-out duration-300 rounded-xl">
              <Link to={`/package-single/${item.id}`}>
                <img className=" w-full rounded-t-xl" src={item.img} alt="" />
              </Link>
              <div className=" flex items-center justify-between py-2 px-4 bg-[#DF6951]">
                <h1 className=" flex items-center gap-4 text-white text-[13px]">
                  <span className=" text-white">
                    <FaRegCalendar />
                  </span>
                  {item.icon}
                </h1>
                <h1 className=" flex items-center gap-4 text-white text-[13px]">
                  <span className=" text-white">
                    <FaUser />
                  </span>
                  {item.icon2}
                </h1>
              </div>
              <h1 className=" text-[22px] font-bold mt-5">{item.title}</h1>
              <p className=" max-w-[305px]">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="  xl:w-1/2 ">
          <div className="flex flex-col gap-4 bg-[#f7f7f7] py-12 px-8">
            <h1 className=" md:text-[33px] text-[22px] font-bold">Plan Your Trip</h1>
            <p className=" text-[12px] md:text-[16px]">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
            <form className=" flex flex-col gap-6">
              <input
                className=" py-3 px-2"
                type="search"
                placeholder="Search to"
              />
              <input
                className=" py-3 px-2"
                type="location"
                placeholder="Where to"
              />
              <input className=" py-3 px-2" type="date" placeholder="Date" />
            </form>
            <button className=" text-white bg-[#DF6951] rounded-md py-3 px-6">
              Book Now
            </button>
          </div>
          <img className=" mt-[34rem] xl:flex hidden" src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Package;
