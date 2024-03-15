import React from "react";
import icon from "../../assets/group1.png";
import icon1 from "../../assets/group2.png";
import icon2 from "../../assets/group3.png";
import booking from "../../assets/booking.png";
const Booking = () => {
  const bookingItem = [
    {
      img: icon,
      title: "Choose Destination",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      img: icon1,
      title: "Check Availability",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      img: icon2,
      title: "Let’s Go",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];
  return (
    <div className=" flex flex-col md:flex-row gap-20 items-center justify-between w-[80%] mx-auto mt-32">
      <div className=" md:w-1/2">
        <h2 className=" text-[#DF6951] font-bold">Fast & Easy</h2>
        <h1 className=" xl:text-[53px] md:text-[33px] text-[25px]  font-bold">
          Get Your Favourite Resort Bookings
        </h1>
         <div className=" flex flex-col gap-8 mt-8">
         {bookingItem.map((item) => (
          <div className=" flex items-center gap-5">
            <img src={item.img} alt="" />
            <div>
              <h1 className=" md:text-[15px] text-[12px] text-[#5E6282] font-[800]">{item.title}</h1>
              <p className=" text-[#5E6282] md:text-[15px] text-[12px]">{item.subtitle}</p>
            </div>
          </div>
        ))}
         </div>
      </div>
      <img className=" md:w-1/2" src={booking} alt="" />
    </div>
  );
};

export default Booking;
