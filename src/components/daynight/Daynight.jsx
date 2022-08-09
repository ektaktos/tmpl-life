import React from 'react'
// import { BsFillSunFill } from "react-icons/bs";
// import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import "./daynight.css"

const Daynight = (props) => {
  return (
    <div className='er__daynight'>
        <div className='right'>
            {props.icon1}
            <h5>{props.text1}</h5>
        </div>
        <div className='left'>
            {props.icon2}
            <h5>{props.text2}</h5>
        </div>
    </div>
  )
}

export default Daynight