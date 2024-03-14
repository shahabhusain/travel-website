import React, { useState } from 'react'
import vector from '../../assets/Vector.png'
import group from '../../assets/Group.png'
import { FaAngleDown } from "react-icons/fa6";
const Hero = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
  return (
    <div className=' back absolute top-0'>
        <div className=' mt-[200px] w-[80%] mx-auto flex flex-col gap-4'>
        <img className=' w-[103px]' src={vector} alt="" />
        <h1 className=' text-[44px] font-bold max-w-[555px] text-white'>No matter where you’re going to, we’ll take you there</h1>
        <div className=' flex items-center gap-6 bg-[#ffffff8c] py-4 px-8 relative w-fit'>
            <div className=' flex items-center gap-12'>
                <h1 className=' text-white'>Where To?</h1>
                <div className=' w-[2px] h-full bg-[#f8f8f8] text-[#fff]'>.</div>
            </div>
            <div className=' flex items-center gap-6'>
                <div>
                <h1 className=' text-white flex items-center gap-2'>Travel Type <span className=' cursor-pointer' onClick={()=>setOpen(!open)}><FaAngleDown /></span></h1>
                
                </div>
                <div className=' w-[2px] h-full bg-[#f8f8f8] text-[#fff]'>.</div>
            </div>
            <div className=' flex items-center gap-6'>
                <h1 className=' text-white flex items-center gap-2'>Duration <span className=' cursor-pointer' onClick={()=>setOpen1(!open1)}><FaAngleDown /></span></h1>
                <div className=' w-[2px] h-full bg-[#f8f8f8] text-[#fff]'>.</div>
            </div>
            <button className=' bg-[#DF6951] py-3 px-6 text-white rounded-md'>Submit</button>
        </div>
        {
            open ? <div className=' bg-white py-3 px-3 absolute top-[32rem] left-[20rem]'>
            <p>Hello</p>
        </div> : ""
        }

{
            open1 ? <div className=' bg-white py-3 px-3 absolute top-[32rem] left-[30rem]'>
            <p>Hello</p>
            <p>Hi</p>
        </div> : ""
        }
        <div className=' flex items-center gap-5 mt-3'>
            <img src={group} alt="" />
            <p className=' text-white'>2,500 people booked Tommorowland Event in last 24 hours</p>
        </div>
      
        </div>
        
    </div>
  )
}

export default Hero