import React from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import HoneyMoon from '../Components/Home/HoneyMoon'
import Booking from '../Components/Home/Booking'
import HolyDay from '../Components/Home/HolyDay'
import Provide from '../Components/Home/Provide'
import Promotion from '../Components/Home/Promotion'
import TrendingTour from '../Components/Home/TrendingTour'
import Clients from '../Components/Home/Clients'
import Airlines from '../Components/Home/Airlines'

const Home = () => {
  return (
    <div>
        <Hero />
        <Airlines />
        <Services />
        <HoneyMoon />
        <Booking />
        <HolyDay />
        <Provide />
        <Promotion />
        <TrendingTour />
        <Clients />
    </div>
  )
}

export default Home