import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
const Airlines = () => {
  return (
    <div className=" bg-[#F7F7F7] w-full py-12 mt-[644px]">
      <div className=" grid grid-cols-5 gap-12 w-[90%] mx-auto">
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
