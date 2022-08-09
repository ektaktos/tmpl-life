import React from 'react'
import { Navbar } from "../../components"
// import wparty from "../../assets/wparty.jpg"
// import wiz from "../../assets/wiz.jpg"
// import wedding from "../../assets/wedding.jpg"
// import swim from "../../assets/swim.jpg"
import "./eventshero.css"

const Eventshero = () => {
  return (
    <div className='er__eventshero'>
        <Navbar />
        <div className='er__eventshero-inner'>
            {/* <div className='collage'>
                <img src={wparty} alt=''/>
                <img src={wiz} alt=''/>
                <img src={wedding} alt=''/>
                <img src={swim} alt=''/>
            </div>
            <div className='text-on-collage'> */}
                <h1>EVENTS AT LIFE</h1>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Eventshero