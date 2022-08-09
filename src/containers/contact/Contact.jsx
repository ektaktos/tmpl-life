import React from 'react'
import telephone from "../../assets/telephone.jpg"
import "./contact.css"
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_uq2ekuo',
      'template_tpnuy0w',
      e.target,
      'h5W514fRwELFZkO9C').then(res=>{
        console.log(res)
      }).catch(err=>console.log(err))
  }
  return (
    <div className='er__contact'>
        <h1>CONTACT US</h1>
        <div className='contact-content'>
            <img src={telephone} alt='Telephone' />
            <div className='form-box'>
                <p>We want to hear from you! For more information on sponsorships, how to partner with us, please send us a message</p>
                <form onSubmit={sendEmail}>
                    <label>Name</label><input type='text' placeholder='Enter your full name' className='input-field' name="name"/>
                    <label>Email Address</label><input type='email' placeholder='Enter your email address' className='input-field' name="user_email"/>
                    <label>Message</label><textarea placeholder='Enter your message' className='textarea-field' name="message" rows={8}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact