import React from 'react'
import "./herotext.css"

const Herotext = (props) => {
  return (
    <div className='life__herotext'>
        <div className='life__herotext-div'>
            <h1 className='one'>{props.bigtext}</h1>
            <h1 className='aboutone'>{props.about}</h1>
        </div>
        <p>{props.smalltext}</p>
    </div>
  )
}

export default Herotext