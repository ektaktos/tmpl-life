import React from 'react'
import { Navbar, Footer } from "../components"
import { Partnerwithlife, Count, Subscribe } from "../containers"
import "./pages.css"

const Partner = () => {
  return (
    <div>
        <Navbar />
        <Partnerwithlife />
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Partner