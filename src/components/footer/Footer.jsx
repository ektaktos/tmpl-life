import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  return (
    <div className='er__footer'>
        <div className='navigation'>
            <p className='link' to="">© 2022 All Rights Reserved </p>
            {/* <p><Link className='link' to="/about">About LIFE</Link></p>
            <p><Link className='link' to="/events/day">Events</Link></p>
            <p><Link className='link' to="/partner">Partner</Link></p>
            <p><Link className='link' to="/tickets">Tickets</Link></p>
            <p><Link className='link' to="/contactus">Contact</Link></p> */}
        </div>
        <div className='socials'>
            {/* <Link className='link' to='
'></Link></a> */}
<a href="https://instagram.com/enjoylife.fest?igshid=YmMyMTA2M2Y=" style={{ color : "white",paddingRight: "20px" }}><AiFillInstagram size={21} /></a>
            {/* <Link className='link' to='
'></Link> */}
<a href="https://twitter.com/enjoylifefest?s=11&t=KyvQrGszN5muwy1_9Lbfdw" style={{ color : "white" }}><AiFillTwitterCircle size={21} /></a>
        </div>
    </div>
  )
}

export default Footer