import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import "./vendorss.css" 

const Vendorss = (props) => {
  return (
    <div className='er__sponsors'>
        <h4>{props.title}</h4>
        <div className='er__sponsors-list2'>
            <p>{props.list1}</p>
            <p>{props.list2}</p>
            <p>{props.list3}</p>
            <p>{props.list4}</p>
            <p>{props.list5}</p>
        </div>
        <p class="last">{props.last}</p>
       <a href='https://docs.google.com/forms/d/e/1FAIpQLSdsoQcGspmd0kVKqUIkldqocFFjIOL1uU63F9a6d9R3nXTLrQ/viewform?embedded=true' className='linkk'>Register</a>
    </div>
  ) 
}
export default Vendorss

