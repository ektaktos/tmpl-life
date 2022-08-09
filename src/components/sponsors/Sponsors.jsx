import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import "./sponsors.css"

const Sponsors = (props) => {
  return (
    <div className='er__sponsors'>
        <h4>{props.title}</h4>
         <p class="head">{props.heading}</p>
         <p>{props.secondheading}</p>
         <p class="bottom">{props.merits}</p>
        <div className='er__sponsors-list'>
          <ul>
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
            <li>{props.list4}</li>
            <li>{props.list5}</li>
            <li>{props.list6}</li>
            <li>{props.list7}</li>
          </ul>
        </div>
        <p class="last2">{props.last}</p>
       <a href='https://docs.google.com/forms/d/e/1FAIpQLSf-g85wcT2g3NuMRZ8KIbyas8MKiIhfK3ET2Agggx3cnqaCkA/viewform?embedded=true' className='linkk'>Register</a>
    </div>
  )
}
export default Sponsors

