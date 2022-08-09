import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'
import { Navbar } from "../../components"
import picc1 from "../../assets/carousel1.jpg"
import picc2 from "../../assets/carousel2.jpg"
import "./mycarousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

const Mycarousel = () => {
  return (
    <div className='life__carousel'>
    <Navbar />
        <Carousel className='boot-carousel'>
        
            <Carousel.Item className='main'>
                <div className='bac-img'>
                    <img
                    className="d-block w-100 car-img"
                    src={picc1}
                    alt="First slide"
                    />
                </div>

                {/* <Carousel.Caption> */}
                    <div className='car-content'>
                        <h1>AN UNLIMITED EXPERIENCE!</h1>
                        <p>Anticipate the Event of a LIFEtime</p>
                        {/* <a href='/'>Experience LIFE</a>*/}
                    </div>

                {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className='main'>
                <div className='bac-img'>
                    <img
                    className="d-block w-100 car-img"
                    src={picc2}
                    alt="Second slide"
                    />
                </div>
                {/* <Carousel.Caption> */}
                    <div className='car-content'>
                        <h1>AN UNLIMITED EXPERIENCE!</h1>
                        <p>Anticipate the Event of a LIFEtime</p>
                        {/* <a href='/'>Experience LIFE</a> */}
                    </div>
                {/* </Carousel.Caption> */}
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                className="d-block w-100 car-img"
                src={picc1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
        <div className='expe_life'><a href='/about'>Experience LIFE</a></div>
    </div>
  )
}

export default Mycarousel