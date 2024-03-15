import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import popular from '../../assets/popular.png'
const PopularTour = () => {
  const percentage = 66;
  const percentage1 = 36;
  const percentage2 = 86;
  return (
   <div className=' flex items-center justify-between gap-20 w-[80%] mx-auto mt-24'>
    
  <div className=' flex flex-col gap-4 w-1/2'>
    <h2 className=' text-[#DF6951] font-bold'>TREND</h2>
    <h1 className=' text-[53px] font-bold'>Our Popular Tour Plans</h1>
    <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
  <div className=' flex items-center gap-12'>
    <div className=' w-[100px]'> 
    <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
    <div className=' w-[100px]'> 
    <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
    </div>
    <div className=' w-[100px]'> 
    <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
    </div>
    </div>
  </div>
  <img className='40%' src={popular} alt="" />
   </div>
  )
}

export default PopularTour