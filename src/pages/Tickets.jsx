import React from 'react'
import { Navbar, Footer } from "../components"
import { Buytickets, Count, Subscribe } from "../containers"
import "./pages.css"

const Tickets = () => {
  return (
    <div>
        <Navbar />
        <Buytickets />
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Tickets