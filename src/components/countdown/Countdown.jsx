import React, {useEffect, useRef, useState} from 'react'
import { Timer } from "../../components"
import "./countdown.css"


const Countdown = () => {
  const [timerMonths, setTimerMonths] = useState('00');
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () =>{
    const countdownDate = new Date('September 30, 2022 00:00:00').getTime();
    interval = setInterval(() => {
       const now = new Date().getTime();
      //  var countdownToMonth = new Date().getMonth();
      //  const monthdistance = countdownDate - countdownToMonth;
       const distance = countdownDate - now;
       const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 4));
       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24) /(1000 * 60 * 60)));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       if(distance < 0){
          //stop our timer
          clearInterval(interval.current);
       } else {
           //update our time
           setTimerMonths(months);
           setTimerDays(days);
           setTimerHours(hours);
           setTimerMinutes(minutes);
           setTimerSeconds(seconds);
       }
    }, 1000);
  }

  //componentDidMount 
  useEffect(()=>{
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })
  return (
    <div className='life__countdown'>
        <div className='life__countdown-content'>
            <p>LIFE IS MEANT TO BE ENJOYED!</p>
            <h3>COUNTDOWN TO LIFE!</h3>
        </div>
        <div className='life__countdown-count'>
            <Timer number={timerMonths} time='Months' />
            <Timer number={timerDays} time='Days'  />
            <Timer number={timerHours} time='Hours' />
            <Timer number={timerMinutes} time='Minutes' />
            <Timer number={timerSeconds} time='Seconds' />
        </div>
    </div>
  )
}

export default Countdown