import React from 'react'
import "./timer.css"

const Timer = (props) => {
  return (
    <div className='life__timer'>
        <div className='life__timer-bigbox'>
            <div className='life__timer-smallbox'>
                <h4>{props.number}</h4>
            </div>
        </div>
        <h5>{props.time}</h5>
    </div>
  )
}

export default Timer