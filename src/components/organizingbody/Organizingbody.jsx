import React from 'react'
import "./organizingbody.css"

const Organizingbody = (props) => {
  return (
    <div className='er__organizingbody'>
        <div className='er__organizingbody-img'>
            <img src={props.orgimg} alt='organizers logo'/>
        </div>
        <div className='er__organizingbody-content'>
            <p><span>{props.big}</span>{props.orgtext1}</p>
            {/* <br/><br /> */}
            <p>{props.orgtext2}</p>
        </div>
    </div>
  )
}

export default Organizingbody