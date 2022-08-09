import React, {Component} from 'react'
import { Daynight, Attractions, Footer } from "../components"
import { Activitiesbody, Count, Subscribe, Eventshero,Activitiesbodynight } from "../containers"
import { BsFillSunFill } from "react-icons/bs";
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
import "./pages.css"

class Eventsday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dayDisplay :{
        display : "block"
      }
      ,

      nightDisplay :{
        display : "none"
      }
    }
  }

  handleClick =() =>{
     this.setState({
       dayDisplay :{
         display : "none"
       }
       ,
       nightDisplay :{
        display : "block"
      }
     })
  }

  handleClick2 =() =>{
    this.setState({
      dayDisplay :{
        display : "block"
      }
      ,
      nightDisplay :{
       display : "none"
     }
    })
 }

  
 render(){
  return (
    <div>
        <Eventshero />
        <Attractions />
        <div className='dayornight' style={this.state.dayDisplay}>
          <Daynight text1='DAYTIME SERIES' text2='NIGHT-TIME SERIES' icon1={<BsFillSunFill size={23} onClick={this.handleClick2} style={{ cursor: "pointer",paddingBottom: "5px" }}/>} icon2={<NightlightRoundRoundedIcon sx={{ fontSize: 23, color: '#b8b8b8',paddingBottom: "6px" }} onClick={this.handleClick} style={{ cursor: "pointer" }}/>} />
        </div>

        <div className='nightorday' style={this.state.nightDisplay}>
          <Daynight text2='DAYTIME SERIES' text1='NIGHT-TIME SERIES' icon2={<BsFillSunFill size={23} color='#b8b8b8' onClick={this.handleClick2} style={{ cursor: "pointer",paddingBottom: "4px" }}/>} icon1={<NightlightRoundRoundedIcon sx={{ fontSize: 23, color: '#b8b8b8',paddingBottom: "6px" }} />} />
        </div>
        
    
        <div className='day_activities' style={this.state.dayDisplay}>
          <Activitiesbody />
        </div>
        


       
        <div className='night_activities' style={this.state.nightDisplay}>
          <Activitiesbodynight />
      
        </div>
        <Count />
        <Subscribe />
        <Footer />
    </div>
  )
 }
}

export default Eventsday