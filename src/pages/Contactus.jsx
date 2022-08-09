import React from 'react'
import { Navbar, Footer } from "../components"
import { Contact, Count, Subscribe } from "../containers"
import "./pages.css"

const Contactus = () => {
  return (
    <div>
        <Navbar />
        <Contact />
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Contactus