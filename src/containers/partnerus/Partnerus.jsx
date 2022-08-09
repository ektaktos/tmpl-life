import React from 'react'
// import { Ellipse } from "../../components"
import "./partnerus.css"
import partneruspic from "../../assets/twohands.jpg"

const Partnerus = () => {
  return (
    <div className='life__partnerus'>
        <div className='life__partner-content'>
            <h2>Want to do <br /> LIFE with us?</h2>
            <p>If you're interested in being a sponsor or vendor at LIFE, click the button below to get started</p>
            <div className='btn'>
                <a href='/partner'>Partner with us</a>
            </div>
        </div>
        <div className='life__partner-image'>
            <img src={partneruspic} alt='pic' />
        </div>
    </div>
  )
}

export default Partnerus