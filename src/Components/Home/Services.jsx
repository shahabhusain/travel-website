import React from "react";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/icon3.png";
import img4 from "../../assets/icon4.png";
const Services = () => {
  const servicesItem = [
    {
      img: img1,
      title: "Guided Tours",
      subtitle: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: img2,
      title: "Best Flights Options",
      subtitle: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: img3,
      title: "Religious Tours",
      subtitle: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
      img: img4,
      title: "Medical insurance",
      subtitle: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
  ];
  return (
    <div className=" w-[80%] mx-auto mt-32">
      <h2 className=" text-[#DF6951] font-bold text-center">Category</h2>
      <h1 className=" xl:text-[53px] md:text-[33px] text-[25px] font-bold text-center">
        We Offer Best Services
      </h1>
      <div className=" flex flex-col md:flex-row items-center justify-between gap-12">
        {servicesItem.map((item) => (
          <div className=" flex flex-col items-center mt-16 justify-center gap-3 hover:shadow-md py-12 rounded-md hover:scale-[1.1] transition-all ease-in-out duration-300">
            <img className=" w-[44px]" src={item.img} alt="" />
            <h1 className=" md:text-[22px] text-[17px] font-semibold">{item.title}</h1>
            <p className=" text-center text-[#5E6282] md:text-[15px] text-[12px]">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
