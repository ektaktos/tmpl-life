import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Eventsday, Eventsnight, Tickets, Partner, Contactus } from "./pages"
import "./App.css"

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/events/day" element={<Eventsday />}/>
                    <Route exact path="/events/night" element={<Eventsnight />}/>
                    <Route exact path="/tickets" element={<Tickets />}/>
                    <Route exact path="/partner" element={<Partner />}/>
                    <Route exact path="/contactus" element={<Contactus />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
