import React from 'react'
import { Link } from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";
import "./activities.css"

const activities = (props) => {
  return (
    <div className='er__activities'>
        <div className='er__activities-img'>
            <img src={props.pic} alt='activity pic'/>
        </div>
        <div className='er__activities-content'>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
        </div>
        <div className='er__activities-more'>
            <Link className='link1' to='/'>
                <p className='view'>view more</p> 
                <p className='arrow'><MdDoubleArrow /></p>
            </Link>
        </div>
    </div>
  )
}

export default activities