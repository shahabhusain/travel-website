import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Upcomming from "../Components/UpcommingPackages/Upcomming";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isActive, setIsActive] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
   
     <div className={`sticky  top-0 w-[100%] z-[100] py-4 ${isActive ? "bg-white shadow-md transition-all duration-300 ease-in-out" : ""}`}>
      <div className="md:flex hidden items-center justify-between mx-24">
        {isActive ? <img src={logo1} alt="Logo" /> : <img src={logo} alt="Logo" />}
        <div>
          <ul className="flex items-center gap-12">
            <Link onClick={() => setOpen1(0)} to='/' className={`cursor-pointer ${open1 === 0 ? "border-b-2" : ""} ${isActive ? "text-black" : "text-white btn"}`}>Home</Link>
            <Link onClick={() => setOpen1(1)} to='/about' className={`cursor-pointer ${open1 === 1 ? "border-b-2" : ""} ${isActive ? "text-black" : "text-white btn"}`}>About</Link>
            <Link onClick={() => setOpen1(2)} to='/packages' className={`cursor-pointer ${open1 === 2 ? "border-b-2" : ""} ${isActive ? "text-black" : "text-white btn"}`}>Packages</Link>

            <li className={`cursor-pointer hover:text-[#DF6951] transition-all ease-in-out duration-300 ${isActive ? "text-black" : "text-white"}`} onClick={handleOpen}>
              Upcoming Packages
            </li>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Upcomming />
              </Box>
            </Modal>

            <button className="text-white bg-[#DF6951] py-3 px-6 rounded-sm hover:scale-[1.1] transition-all duration-300 ease-in-out">
              Get in Touch
            </button>
          </ul>
        </div>
      </div>
      {/* mobile */}
      <div className=" mx-12 flex md:hidden items-center justify-end ">
      {isActive ? <span className=" text-[22px] text-black mt-5"><IoMdMenu /></span> : <span className=" text-[22px] text-white mt-5"><IoMdMenu /></span>}
      </div>
      {/* mobile */}
    </div>
   
  );
};

export default Header;
