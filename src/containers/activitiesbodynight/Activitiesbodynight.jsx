import React from 'react'
import { Activities } from "../../components"
import concert from "../../assets/concert.jpg"
import dj from "../../assets/dj.jpg"
import asoebi from "../../assets/asoebi.jpg"
import white from "../../assets/white.jpg"
import "./activitiesbodynight.css"

const Activitiesbodynight = () => {
  return (
    <div className='er__activitiesbody'>
        <Activities pic={concert} title="MUSIC CONCERT" content="The very best of Naija performing
their hits to the delight of the
Independence crowd.
A cluster of the young and trending
acts to ensure that everyone in
attendance gets the vibes of the..." />
<Activities pic={dj} title="DJ FEVER" content="A silent party with Headphones
where the 3 DJs play music
simultaneously and the audience
have the latitude to switch to a
different DJ based on preference." />
<Activities pic={asoebi} title="ASO-EBI PARTY" content="In celebration of our culture and
heritage, we will have a customized
fabric for people to sew for the night.
This would be the costume worn
during the Night of Legends concert." />
<Activities pic={white} title="ALL WHITE PARTY" content="An exclusive gathering to have
fun and party the Lagos way. The vibes will replicate the Lagos Night Life scenery and only exclusive
passes will allow people entry into
this part of the festival." />
    </div>
  )
}

export default Activitiesbodynight