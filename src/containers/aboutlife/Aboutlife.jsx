import React from 'react'
import { Aboutrectangle } from "../../components"
import pic1 from "../../assets/hercul.jpg"
import pic2 from "../../assets/families.jpg"
import pic3 from "../../assets/MIN.jpg"
import pic4 from "../../assets/history.jpg"
import pic5 from "../../assets/food.jpg"
import pic6 from "../../assets/unity.jpg"
import pic7 from "../../assets/entertainment.jpg"
import pic8 from "../../assets/patriotism.jpg"
import "./aboutlife.css"

const Aboutlife = () => {
  return (
    <div className='er__aboutlife'>
        <h2>ABOUT LIFE</h2>
        <div className='er__aboutlife-rec'>
            <Aboutrectangle innertext='Celebrate CULTURE & HERITAGE' imagee={pic1} />
            <Aboutrectangle innertext='Bring FAMILIES Together' imagee={pic2} />
            <Aboutrectangle innertext='Encourage MADE IN NIGERIA' imagee={pic3} />
            <Aboutrectangle innertext='EDUCATE on our rich history' imagee={pic4} />
            <Aboutrectangle innertext='Showcase the diversity of our FOOD & DRINKS' imagee={pic5} />
            <Aboutrectangle innertext='Promote UNITY and Oneness' imagee={pic6} />
            <Aboutrectangle innertext='ENTERTAINMENT for all' imagee={pic7} />
            <Aboutrectangle innertext='Foster PATRIOTISM' imagee={pic8} />
        </div>
    </div>
  )
}

export default Aboutlife