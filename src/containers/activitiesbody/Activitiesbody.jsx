import React from 'react'
import { Activities } from "../../components"
import kids from "../../assets/kids.jpg"
import flavors from "../../assets/flavors.jpg"
import madein from "../../assets/madeinn.jpg"
import discuss from "../../assets/discuss.jpg"
import celebrity from "../../assets/celebrity.jpg"
import "./activitiesbody.css"
 
const Activitiesbody = () => {
  return (
    <div className='er__activitiesbody'>
        <Activities pic={kids} title="KID'S WONDERLAND" content="A city for kids by kids
with an elaborate map of all sections and the endless possibilities contained within." />
<Activities pic={flavors} title="NAIJA FLAVOURS" content="A showcase of distinct food and
drinks Nigeria has to offer. An exploration of culture and cuisines, giving everyone the opportunity to immerse in the delicacies of different
parts of the country." />
<Activities pic={madein} title="MADE IN NIGERIA" content="A celebration of made in Nigeria
products and services. An avenue to showcase with
pride products and services built
in Nigeria by Nigerians, fostering
communal pride and further
promoting our excellence." />
<Activities pic={discuss} title="DISCUSS NIGERIA" content="A panel session featuring thought
leaders in different sectors.
Expanding the mind of the public
on business, women empowerment,
social media, and even the endless
opportunities within Nigeria." />
<Activities pic={celebrity} title="CELEBRITY AUCTIONS" content="A special auction in support of
the Lagos Frontline Workers for
all that they consistently
make happen." />
    </div>
  )
}

export default Activitiesbody