import React from 'react'
import "./aboutrectangle.css"

const Aboutrectangle = (props) => {
  return (
    <div className='er__aboutrec' style={{background: `linear-gradient(360deg, #00003D 11.44%, rgba(0, 0, 61, 0) 97.51%), url(${props.imagee})`, backgroundSize:'cover'}}>
        <p className='top'>{props.innertext}</p>
    </div>
  )
}

export default Aboutrectangle