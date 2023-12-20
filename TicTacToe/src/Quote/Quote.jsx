import React from 'react'
import './Quote.css'
import { useState,useEffect } from "react";



function Quote() {
    let [quote, setQuote] = useState('loading ...');
    let [quoteCount,setQuoteCount]=useState(0);

  
    useEffect(()=>{
      
      
      const storedQuote = JSON.parse(window.localStorage.getItem('quote'));
      const storedQuoteCount = JSON.parse(window.localStorage.getItem('quoteCount'));

      if (storedQuote && storedQuoteCount) {
        setQuoteCount(JSON.parse(window.localStorage.getItem('quoteCount')));
        setQuote(JSON.parse(window.localStorage.getItem('quote')));}
      else{
        window.localStorage.setItem('quote', JSON.stringify(quote));
        window.localStorage.setItem('quoteCount', JSON.stringify(quoteCount));

      }

      fetchQuote();
      
      }, []);

    useEffect(() => {
      window.localStorage.setItem('quote', JSON.stringify(quote));
    }, [quote]);

    useEffect(() => {
      
      window.localStorage.setItem('quoteCount', JSON.stringify(quoteCount));
    }, [quoteCount]);
  

    const fetchQuote=()=>{
        fetch('	https://api.adviceslip.com/advice')
        .then((res)=>{return res.json();}).then((data)=>{ setQuote(data.slip.advice);})
        .catch((err)=>{console.log(err)});

        setQuoteCount(JSON.parse(window.localStorage.getItem('quoteCount'))   +1);
        
    }

   

  return (
    <div id="quote-container">
    <h1>Quote #{quoteCount}</h1>
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