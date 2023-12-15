import React from 'react'
import './Quote.css'
import { useState,useEffect } from "react";



function Quote() {
    const [quote, setQuote] = useState('loading ...');

    const fetchQuote=()=>{
        fetch('	https://api.adviceslip.com/advice')
        .then((res)=>{return res.json();}).then((data)=>{ setQuote(data.slip.advice);})
        .catch((err)=>{console.log(err)});
    }

    useEffect(()=>{fetchQuote();}, []);

  return (
    <div id="quote-container">
    <h1>Quote #1</h1>
    <p>
      {quote}
    </p>
    <div id='test'>
    <div id="bottom-logo">
      <div className="circle"></div>
      <div className="circle2"></div>
    </div>
    </div>
    
  </div>
  )
}

export default Quote