import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import "./vendors.css"

const Vendors = (props) => {
  return (
    <div className='er__sponsors'>
        <h4>{props.title}</h4>
        <div className='er__sponsors-list'>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list1}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list2}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list3}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list4}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list5}</p>
        </div>
       <a href='https://docs.google.com/forms/d/e/1FAIpQLSf-g85wcT2g3NuMRZ8KIbyas8MKiIhfK3ET2Agggx3cnqaCkA/viewform?embedded=true' className='linkk'>Register</a>
    </div>
  ) 
}
export default Vendors

