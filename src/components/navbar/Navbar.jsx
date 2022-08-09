import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiLayoutGridFill, RiCloseCircleFill } from "react-icons/ri"
// import { AiFillAppstore } from "react-icons/ai";
import logo from "../../assets/Lifelogo.png"
// import whitelife from "../../assets/whitelife.jpg"
import "./navbar.css"


const Menu = () => (
    <>
        <p><Link className='link' to="/">Home</Link></p>
        <p><Link className='link' to="/about">About LIFE</Link></p>
        <p><Link className='link' to="/events/day">Events</Link></p>
        <p><Link className='link' to="/partner">Partner</Link></p>
        <p><Link className='link' to="/tickets">Tickets</Link></p>
        <p><Link className='link' to="/contactus">Contact</Link></p>
        {/* <p><a href="#blog">Blog</a></p> */}
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='e__navbar'>
        <div className='e__navbar-links_logo'>
            <a href="/"><img src={logo} alt='logo' /></a>
        </div>
        {/* {toggleMenu && (
        <div className='e__navbar-links_container'>
                <Menu />
        </div>
        )} */}
        <div className='e_navbar-menu'>
        {toggleMenu && (
        <div className='e__navbar-links_container'>
                <Menu />
        </div>
        )}
            {/* <p>Explore</p> */}
            {toggleMenu ? <p className='explore' onClick={() => setToggleMenu(false)}> <RiCloseCircleFill color='#fff' size={23} /> </p>
            : <p className='explore' onClick={() => setToggleMenu(true)}>Explore <RiLayoutGridFill color='#fff' size={23} /> </p>
            }
            {toggleMenu && (
                <div className='e_navbar-menu_container scale-up-center'>
                    <div className='e_navbar-menu_container-links'>
                        <Menu />
                    </div>
                    {/* <div className='e_navbar-menu_container-img'>
                        <img src={lifeLogo} alt='life-logo' />
                    </div> */}
                </div>
            )}
        </div>
        {/* <div className='e_navbar-menu'>
            {toggleMenu ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} /> 
            }
            {toggleMenu && (
                <div className='e_navbar-menu_container scale-up-center'>
                    <div className='e_navbar-menu_container-links'>
                        <Menu />
                    </div>
                </div>
            )}
        </div> */}
    </div>
  )
}

export default Navbar