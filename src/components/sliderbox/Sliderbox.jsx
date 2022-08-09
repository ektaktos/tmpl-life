import React from 'react'
import "./sliderbox.css"

const Sliderbox = (props) => {
  return (
        <div className='er__sliderbox' style={{background: `linear-gradient(${props.grad}), url(${props.imagee})`, backgroundSize:'cover', backgroundPositionY:'center'}}>
            <h2>{props.header}</h2>
            <p className='top'>{props.ptext}</p>
        </div>
  )
}

export default Sliderbox