/* eslint-disable */
import React from 'react'
import { Carousel } from 'antd'; 'react-responsive-carousel'
import picc1 from "../../assets/carousel1.jpg"
import picc2 from "../../assets/carousel2.jpg"
import "./herocarousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
 

const Herocarousel = () => {
  return (
    <div>
      <Carousel>
        <div classname='life__carousel' style={{ backgroundImage: 'url(' + picc1 + '), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), backgroundSize: cover' }}>
          <h1>AN UNLIMITED EXPERIENCE!</h1>
          <p>Anticipate the Event of a Lifetime</p>
          <a href='/'>Experience LIFE</a>
        </div>
        <div classname='life__carousel' style={{ backgroundImage: 'url(' + picc2 + '), linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), backgroundSize: cover' }}>
          <h1>AN UNLIMITED EXPERIENCE!</h1>
          <p>Anticipate the Event of a Lifetime</p>
          <a href='/'>Experience LIFE</a>
        </div>
        {/* <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
      </Carousel>
    </div>
  )
}

export default Herocarousel