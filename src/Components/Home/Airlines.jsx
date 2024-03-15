import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
const Airlines = () => {
  return (
    <div className=" bg-[#F7F7F7] w-full py-12 md:mt-[644px] xl:mt-[844px] mt-[600px]">
      <div className=" grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-12 w-[90%] mx-auto">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  );
};

export default Airlines;
