import React from "react";
import sight from '../../assets/sight.png'
const Sightseeing = () => {
  return (
    <div className=" mt-[33rem]">
      <div className=" flex gap-20 items-center justify-between w-[80%] mx-auto">
        <div className=" flex flex-col gap-4  w-1/2">
          <h2 className=" text-[#DF6951] font-bold">PROMOTION</h2>
          <h1 className=" text-[33px] font-bold">We Provide You Best Europe Sightseeing Tours</h1>
          <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
          <button className=" bg-[#DF6951] text-white py-3 px-6 rounded-md w-fit">View Packages</button>
        </div>
        <img className=" w-1/2" src={sight} alt="" />
      </div>
    </div>
  );
};

export default Sightseeing;
