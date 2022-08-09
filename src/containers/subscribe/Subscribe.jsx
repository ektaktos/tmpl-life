import React, { useState } from 'react'
import "./subscribe.css"
import emailjs from 'emailjs-com'

const Subscribe = () => {
  const [val, setVal] = useState();
  function sendSubscribe(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_1m6c5md',
      'template_hzjczfd',
      e.target,
      'h5W514fRwELFZkO9C').then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
    
      setVal(()=> "")
  }
  return (
    <div className='er__subscribe'>
        <h5>Subscribe to get updates on our lineups, early-bird tickets and more</h5>
        <div>
            <form className='myform' onSubmit={sendSubscribe}>
                <input type='email' placeholder='Enter your email address' name="email" value={val}/>
                <button className='subbtn'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe