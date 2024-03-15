import React from 'react'
import img1 from '../../assets/imgg1.png'
import img2 from '../../assets/imgg2.png'
import img3 from '../../assets/imgg3.png'
import img4 from '../../assets/imgg4.png'
import img5 from '../../assets/imgg5.png'
import img6 from '../../assets/imgg6.png'
import img7 from '../../assets/imgg7.png'
import img10 from '../../assets/imgg10.png'
import img11 from '../../assets/imgg11.png'
import img12 from '../../assets/imgg12.png'
const Explore = () => {
  const explore = [
    {
      img:img1
    },
    {
      img:img2
    },
    {
      img:img3
    },
    {
      img:img4
    },
    {
      img:img5
    },
    {
      img:img6
    },
    {
      img:img7
    },
    {
      img:img10
    },
    {
      img:img11
    },
    {
      img:img12
    },
    {
      img:img10
    },
    {
      img:img12
    },
  ]
  return (
    <>
    <div>
      <h2 className=' text-[#DF6951] text-center font-bold mt-24'>EXPLORE ME</h2>
      <h1 className=' text-[33px] font-bold text-center'>Our International Packages</h1>
    </div>
    <div className=' grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-12'>
      {
        explore.map((item)=>(
          <div className=' overflow-hidden'>
            <img className=' w-full hover:scale-[1.1] transition-all ease-in-out duration-300' src={item.img} alt="" />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Explore