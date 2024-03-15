import React from 'react'
import honey from '../../assets/honey.png'
const HoneyMoon = () => {
  return (
    <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-20 w-[80%] mx-auto mt-32'>
      <img className=' md:w-1/2' src={honey} alt="" />
      <div className=' flex flex-col gap-5 md:w-1/2'>
        <h2 className=' text-[#DF6951] font-bold'>HONEYMOON SPECIAL</h2>
        <h1 className=' xl:text-[53px] md:text-[33px] text-[25px] font-bold'>Our Romantic Tropical Destinations</h1>
        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        <button className=' bg-[#DF6951] py-3 px-6 rounded-md text-white w-fit'>View Packages</button>
      </div>
    </div>
  )
}

export default HoneyMoon