import React from 'react'
import { Daynight, Attractions, Footer } from "../components"
import { Activitiesbodynight, Count, Subscribe, Eventshero } from "../containers"
import { BsFillSunFill } from "react-icons/bs";
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import "./pages.css"

const Eventsnight = () => {
  return (
    <div>
        <Eventshero />
        <Attractions />
        <div className='nightorday'>
          <Daynight text2='DAYTIME SERIES' text1='NIGHT-TIME SERIES' icon2={<BsFillSunFill size={23} color='#b8b8b8' />} icon1={<NightlightRoundRoundedIcon sx={{ fontSize: 23, color: '#b8b8b8'}} />} />
        </div>
        <div className='night_activities'>
          <Activitiesbodynight />
        </div>
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Eventsnight