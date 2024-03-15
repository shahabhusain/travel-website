import React from 'react'
import img1 from '../../assets/pro1.png'
import img2 from '../../assets/pro2.png'
import img3 from '../../assets/pro3.png'
import img4 from '../../assets/pro4.png'
import promotion from '../../assets/promotion.png'
const Provide = () => {
  return (
    <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-20 mt-32 w-[90%] mx-auto'>
    <div className=' md:w-1/2 flex flex-col gap-4'>
    <h2 className=' text-[#DF6951] font-bold'>PROMOTION</h2>
     <h1 className=' xl:text-[53px] md:text-[33px] text-[25px] font-bold'>We Provide You Best Europe Sightseeing Tours</h1>
     <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
     <button className=' bg-[#DF6951] py-3 px-6 rounded-md text-white w-fit hover:scale-[1.1] transition-all duration-300 ease-in-out'>View Packages</button>
     <div className=' flex flex-col md:flex-row md:items-center gap-12 mt-12'>
       <img className=' hover:scale-[1.1] transition-all duration-300 ease-in-out' src={img1} alt="" />
       <img className=' hover:scale-[1.1] transition-all duration-300 ease-in-out' src={img2} alt="" />
       <img className=' hover:scale-[1.1] transition-all duration-300 ease-in-out' src={img3} alt="" />
       <img className=' hover:scale-[1.1] transition-all duration-300 ease-in-out' src={img4} alt="" />
     </div>
    </div>
    <img className=' md:w-1/2 z-[-1]' src={promotion} alt="" />
   </div>  )
}

export default Provide