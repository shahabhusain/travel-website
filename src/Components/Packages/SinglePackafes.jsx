import React, { useEffect, useState } from "react";
import { packagesItem } from "../Data";
import img1 from "../../assets/pa1.png";
import main from "../../assets/travles.png";
import map from '../../assets/map.png'
import v1 from '../../assets/v1.png'
import v2 from '../../assets/v2.png'
import v3 from '../../assets/v3.png'
import s1 from '../../assets/s1.png'
import h1 from '../../assets/h1.png'
import h2 from '../../assets/h2.png'
import s from '../../assets/s.png'
const SinglePackafes = ({ id }) => {
  const selectedProject = packagesItem.find((project) => project.id == id);
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div>
        <div className=" back9 absolute top-0">
          <div className=" flex items-center justify-center">
            <h1 className=" title text-[64px] font-[800] text-white pt-60">
              Landscapes Explore
            </h1>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-between w-[80%] mx-auto mt-[33rem] bg-[#f7f7f7] shadow-sm">
        <li
          onClick={() => setOpen(!open)}
          className={`text-[22px] font-bold list-none text-decoration-none cursor-pointer w-full text-center ${
            open ? "" : "bg-[#fff] py-6 px-6"
          }`}
        >
          Information
        </li>
        <li
          onClick={() => setOpen(1)}
          className={`text-[22px] font-bold list-none text-decoration-none cursor-pointer w-full text-center ${
            open === 1 ? "bg-[#fff] py-6 px-6" : ""
          }`}
        >
          Tour Plane
        </li>
        <li
          onClick={() => setOpen(2)}
          className={`text-[22px] font-bold list-none text-decoration-none cursor-pointer w-full text-center ${
            open === 2 ? "bg-[#fff] py-6 px-6" : ""
          }`}
        >
          Location
        </li>
        <li
          onClick={() => setOpen(3)}
          className={`text-[22px] font-bold list-none text-decoration-none cursor-pointer w-full text-center ${
            open === 3 ? "bg-[#fff] py-6 px-6" : ""
          }`}
        >
          Gallery
        </li>
      </div>
      {/* button */}
      {open ? (
        ""
      ) : (
        <>
          <>
            {/* start */}
            <div className=" w-[80%] mx-auto flex gap-20 mt-14  ">
              <div className=" w-full">
                <h1 className=" text-[33px] font-bold flex items-center gap-24">
                  Switzerland{" "}
                  <span className=" text-[#DF6951] font-medium">1000$</span>
                </h1>
                <p className=" mt-4">
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolor similique ut quasi maxime ut deserunt autem At
                  praesentium voluptatem aut libero nisi. Et eligendi sint ab
                  cumque veritatis aut provident aliquam. Aut aspernatur
                  consequuntur eum quaerat distinctio ut inventore aliquid et
                  quasi alias ut rerum suscipit et nihil deleniti. Ex optio
                  sequi et quos praesentium in nostrum labore nam rerum iusto
                  aut magni nesciunt? Quo quidem neque iste expedita est dolor
                  similique ut quasi maxime ut deserunt autem At praesentium
                  voluptatem aut libero nisi. Et eligendi sint ab cumque
                  veritatis aut provident aliquam. Aut aspernatur consequuntur
                  eum quaerat distinctio ut inventore aliquid et quasi alias ut
                  rerum suscipit et nihil deleniti.
                </p>
                <div className=" flex items-center gap-12 my-12">
                  <div className=" flex flex-col gap-5">
                    <h1 className=" text-[#DF6951] font-bold">Destination</h1>
                    <h1 className=" text-[#DF6951] font-bold">Departure</h1>
                    <h1 className=" text-[#DF6951] font-bold">
                      Departure Time
                    </h1>
                    <h1 className=" text-[#DF6951] font-bold">Return Time</h1>
                    <h1 className=" text-[#DF6951] font-bold">Dress Code</h1>
                    <h1 className=" text-[#DF6951] font-bold">Not Included</h1>
                  </div>
                  <div className=" flex flex-col gap-5">
                    <h1>: Zurich, Switzerland</h1>
                    <h1>: Main Sqaure, New City</h1>
                    <h1>: Approximately 08 : 10 AM</h1>
                    <h1>: Approximately 07 : 20 PM</h1>
                    <h1>: Casual, comfortable and light</h1>
                    <h1 className=" flex items-center gap-12">
                      Gallery Ticket <span>Lunch</span>
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[33px] font-bold">From Gallery</h1>
                  <p className="">
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolor similique ut quasi maxime ut deserunt
                    autem At praesentium voluptatem aut libero nisi.{" "}
                  </p>
                  <div className=" grid grid-cols-3 gap-4 mt-12">
                    <img className=" w-full object-contain" src={img1} alt="" />
                    <img className=" w-full object-contain" src={img1} alt="" />
                    <img className=" w-full object-contain" src={img1} alt="" />
                    <img className=" w-full object-contain" src={img1} alt="" />
                    <img className=" w-full object-contain" src={img1} alt="" />
                    <img className=" w-full object-contain" src={img1} alt="" />
                  </div>
                </div>
              </div>

              <div className="  w-1/2 ">
                <div className="flex flex-col gap-4 bg-[#f7f7f7] py-12 px-8">
                  <h1 className=" text-[33px] font-bold">Plan Your Trip</h1>
                  <p>
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                  <form className=" flex flex-col gap-6">
                    <input
                      className=" py-3 px-2"
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Confirm Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="call"
                      placeholder="Phone"
                    />
                    <input
                      className=" py-3 px-2"
                      type="date"
                      placeholder="Date"
                    />
                    <input
                      className=" py-3 px-2"
                      type="number"
                      placeholder="Number"
                    />
                    <input
                      className=" py-3 px-2"
                      type="message"
                      placeholder="Meassage"
                    />
                  </form>
                  <button className=" text-white bg-[#DF6951] rounded-md py-3 px-6">
                    Book Now
                  </button>
                </div>
                <img className=" mt-[14rem]" src={main} alt="" />
              </div>
            </div>
            {/* end */}
          </>
        </>
      )}

      {open === 1 ? (
        <>
          <div className=" w-[80%] mx-auto">
            <h1 className=" text-[33px] font-bold mt-12">Tour Plane</h1>
            <div className=" flex gap-20 mt-12 ">
              <div className=" w-full flex flex-col gap-5">
                <div className=" flex flex-col gap-3">
                  <div className=" flex items-center gap-4">
                    <button className=" bg-[#DF6951] text-white py-2 px-2 rounded-md">
                      01
                    </button>
                    <h1 className=" text-[23px] font-semibold">
                      Day 1: Departure
                    </h1>
                  </div>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <div>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" flex items-center gap-4">
                    <button className=" bg-[#DF6951] text-white py-2 px-2 rounded-md">
                      02
                    </button>
                    <h1 className=" text-[23px] font-semibold">
                      Day 2: Visiting Zurich, Geneva and Zermatt
                    </h1>
                  </div>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <div>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" flex items-center gap-4">
                    <button className=" bg-[#DF6951] text-white py-2 px-2 rounded-md">
                      03
                    </button>
                    <h1 className=" text-[23px] font-semibold">Day 3: Rest</h1>
                  </div>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <div>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" flex items-center gap-4">
                    <button className=" bg-[#DF6951] text-white py-2 px-2 rounded-md">
                      04
                    </button>
                    <h1 className=" text-[23px] font-semibold">
                      Day 4: Historical Tour
                    </h1>
                  </div>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <div>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" flex items-center gap-4">
                    <button className=" bg-[#DF6951] text-white py-2 px-2 rounded-md">
                      05
                    </button>
                    <h1 className=" text-[23px] font-semibold">
                      Day 5: Return
                    </h1>
                  </div>
                  <p>
                    Qui tempore voluptate qui quia commodi rem praesentium alias
                    et voluptates officia sed molestiae sint et voluptas quos.
                    Qui harum repudiandae galisum dolorem
                  </p>
                  <div>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accommodation</li>
                    <li>Breakfast</li>
                  </div>
                </div>
              </div>
              <div className="  w-1/2 ">
                <div className="flex flex-col gap-4 bg-[#f7f7f7] py-12 px-8">
                  <h1 className=" text-[33px] font-bold">Plan Your Trip</h1>
                  <p>
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                  <form className=" flex flex-col gap-6">
                    <input
                      className=" py-3 px-2"
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Confirm Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="call"
                      placeholder="Phone"
                    />
                    <input
                      className=" py-3 px-2"
                      type="date"
                      placeholder="Date"
                    />
                    <input
                      className=" py-3 px-2"
                      type="number"
                      placeholder="Number"
                    />
                    <input
                      className=" py-3 px-2"
                      type="message"
                      placeholder="Meassage"
                    />
                  </form>
                  <button className=" text-white bg-[#DF6951] rounded-md py-3 px-6">
                    Book Now
                  </button>
                </div>
                <img className=" mt-[14rem]" src={main} alt="" />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {open === 2 ? (
        <>
          <div className=" w-[80%] mx-auto flex gap-20 mt-12">
            <div className="w-full">
            <h1 className=" text-[33px] font-bold">Tour Plan</h1>
              <p className=" py-4">Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium</p>
              <div className=" flex flex-col gap-5">
              <img src={map} alt="" />
              <p>Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil.</p>
              <p>Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.</p>
              </div>
            </div>
            <div className="  w-1/2 ">
                <div className="flex flex-col gap-4 bg-[#f7f7f7] py-12 px-8">
                  <h1 className=" text-[33px] font-bold">Plan Your Trip</h1>
                  <p>
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                  <form className=" flex flex-col gap-6">
                    <input
                      className=" py-3 px-2"
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Confirm Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="call"
                      placeholder="Phone"
                    />
                    <input
                      className=" py-3 px-2"
                      type="date"
                      placeholder="Date"
                    />
                    <input
                      className=" py-3 px-2"
                      type="number"
                      placeholder="Number"
                    />
                    <input
                      className=" py-3 px-2"
                      type="message"
                      placeholder="Meassage"
                    />
                  </form>
                  <button className=" text-white bg-[#DF6951] rounded-md py-3 px-6">
                    Book Now
                  </button>
                </div>
                <img className=" mt-[14rem]" src={main} alt="" />
              </div>
          </div>
        </>
      ) : (
        ""
      )}

      {open === 3 ? (
        <>
         <div className=" w-[80%] mx-auto flex gap-20 mt-32">
          <div className=" w-full flex flex-col gap-5">
           <div className=" flex gap-5">
           <div className=" flex flex-col gap-5">
            <img className="" src={v1} alt="" />
            <img className="" src={v2} alt="" />
            <img className="" src={v3} alt="" />
            </div>
            <img className="" src={s1} alt="" />
           </div>
           <div className=" flex gap-5">
            <img src={h1} alt="" />
            <img src={h2} alt="" />
           </div>
           <img src={s} alt="" />
          </div>
         <div className="  w-1/2 ">
                <div className="flex flex-col gap-4 bg-[#f7f7f7] py-12 px-8">
                  <h1 className=" text-[33px] font-bold">Plan Your Trip</h1>
                  <p>
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                  <form className=" flex flex-col gap-6">
                    <input
                      className=" py-3 px-2"
                      type="name"
                      placeholder="Name"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="email"
                      placeholder="Confirm Email"
                    />
                    <input
                      className=" py-3 px-2"
                      type="call"
                      placeholder="Phone"
                    />
                    <input
                      className=" py-3 px-2"
                      type="date"
                      placeholder="Date"
                    />
                    <input
                      className=" py-3 px-2"
                      type="number"
                      placeholder="Number"
                    />
                    <input
                      className=" py-3 px-2"
                      type="message"
                      placeholder="Meassage"
                    />
                  </form>
                  <button className=" text-white bg-[#DF6951] rounded-md py-3 px-6">
                    Book Now
                  </button>
                </div>
                <img className=" mt-[14rem]" src={main} alt="" />
              </div>
         </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SinglePackafes;
