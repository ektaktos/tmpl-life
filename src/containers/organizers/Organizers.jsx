import React from 'react'
import { Organizingbody } from "../../components"
import balmoral from "../../assets/balmoral.PNG"
import temple from "../../assets/TEMPLE.webp"
import fedpalace from "../../assets/fedpalace.jpg"
import "./organizers.css"

const Organizers = () => {
  return (
    <div className='er__organizers'>
        <h1>ORGANIZERS</h1>
        <div className='organizer1'>
            <Organizingbody big='BALMORAL' orgimg={balmoral} orgtext1=' is a 360 Events solutions company that invests in
 conceptualisation and delivery of experiential events aimed
at creating value to all stakeholders.'orgtext2='Balmoral is currently one of the leaders in the event
 management space in West Africa and positioned to biggest
in Africa in few years due to its values and innovations.'/>
        </div>
        <div className='organizer2'>
            <Organizingbody big='THE TEMPLE COMPANY' orgimg={temple} orgtext1=' is a full service agency positioned to serve
the best talents, brands and properties in Africa.' orgtext2='Creating high value experiences in Media, Communications, Entertainment and Sports.
The Temple Company meets international best practices and operates
on a global scale. TMC also owns West and Central Africas
most equipped Audio-Visual studio.' />
        </div>
        <div className='organizer3'>
            <img src={fedpalace} alt='organizers'/>
        </div>
        <div className='history'>
            <p>The first edition of LIFE will be held between the 30th of September & 2nd October, 2022 at The Federal Palace Hotel, Lagos.</p>
            <br /><br />
            <p>The Federal Palace hotel is historically significant for being the location for the signing of Nigeria's Declaration of Independence in 1960.</p>
        </div>
    </div>
  )
}

export default Organizers