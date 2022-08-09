import React from 'react'
import { Footer } from "../components"
import { Herocontainer, Aboutlife, Organizers, Count, Subscribe} from "../containers"
import "./pages.css"

const About = () => {
  return (
    <div>
        <Herocontainer />
        <Aboutlife />
        <Organizers />
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default About