import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Sliderbox } from "../../components"
import discuss9ja from "../../assets/discussn.jpg"
import njaflavors from "../../assets/naijaf.jpg"
import children from "../../assets/children.jpg"
// import LeftArrow from "../../assets/LeftArrow.png"
// import RightArrow from "../../assets/RightArrow.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./sliderr.css"
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const Sliderr = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    // <img src={LeftArrow} alt="prevArrow" {...props} />
    <p {...props}><ArrowBackIosIcon /></p>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    // <img src={RightArrow} alt="nextArrow" {...props} />
    <p {...props}><ArrowForwardIosIcon /></p>
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2.4,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
      },
      arrows: false,
      initialSlide: 0,
      dots: true,
      autoplay: true,
      prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    };
  return (
    <div className='er__slider'>
        <div  className='er__slider1'>
        <Slider {...settings}>
              <Sliderbox  grad='166.16deg, rgba(251, 218, 97, 0.48) 25.1%, #EC5B08 69.93%' imagee={njaflavors} header='NAIJA FLAVOURS' ptext='A showcase of distinct food and drinks Nigeria has to offer. An exploration of culture and cuisines..' />
              <Sliderbox grad='360deg, #00003D 11.44%, rgba(0, 0, 61, 0) 97.51%' imagee={discuss9ja} header='DISCUSS NIGERIA' ptext='A panel session featuring thought leaders in different sectors. Expanding the mind of the public on business…' />
              <Sliderbox className='er__slider3' grad='284.39deg, #D24074 37.18%, rgba(101, 24, 180, 0.44) 84.77%' imagee={children} header="CHILDREN'S WONDERLAND" ptext='A city for kids by kids with an elaborate map of all sections and the endless possibilities contained within.' />
        </Slider>
        </div>
        <div className='er__slider2'>
        <Slider {...settings}>
              <Sliderbox  grad='166.16deg, rgba(251, 218, 97, 0.48) 25.1%, #EC5B08 69.93%' imagee={njaflavors} header='NAIJA FLAVOURS' ptext='A showcase of distinct food and drinks Nigeria has to offer. An exploration of culture and cuisines.' />
              <Sliderbox grad='360deg, #00003D 11.44%, rgba(0, 0, 61, 0) 97.51%' imagee={discuss9ja} header='DISCUSS NIGERIA' ptext='A panel session featuring thought leaders in different sectors. Expanding the mind of the public on business' />
              
              
        </Slider>
        </div>
    </div>
  )
}

export default Sliderr