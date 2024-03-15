import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import user from "../../assets/user.png";
const Clients = () => {
  return (
    <div className=" back5">
      <h2 className="text-[#DF6951] font-bold pt-40 text-center">PROMOTION</h2>
      <h1 className=" text-[33px] font-bold text-center">
        See What Our Clients Say About Us
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" md:mx-[28rem] sm:mx-[12px] mx-[12px] mt-[-3rem]">
            <dir className=" flex items-center justify-center relative top-20">
              {" "}
              <img src={user} alt="" />
            </dir>

            <div className=" bg-white py-12 px-8 rounded-md ">
              <h1 className=" md:text-start text-center">
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </h1>
              <p className="md:text-start text-center font-bold ">Christine Beckam - Designer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:mx-[28rem] sm:mx-[12px] mx-[12px] mt-[-3rem]">
            <dir className=" flex items-center justify-center relative top-20">
              {" "}
              <img src={user} alt="" />
            </dir>

            <div className=" bg-white py-12 px-8 rounded-md ">
              <h1>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </h1>
              <p>Christine Beckam - Designer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:mx-[28rem] sm:mx-[12px] mx-[12px] mt-[-3rem]">
            <dir className=" flex items-center justify-center relative top-20">
              {" "}
              <img src={user} alt="" />
            </dir>

            <div className=" bg-white py-12 px-8 rounded-md ">
              <h1>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </h1>
              <p>Christine Beckam - Designer</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients;
