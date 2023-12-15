import React from 'react'
import './ResultPopup.css'
function ResultPopup({setResultPopup,setMatrix,setStartGame}) {

    let quit=()=>{
        //reset matrix,score
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setResultPopup(false);
        setStartGame(false);
    };

    let playAgain=()=>{
        //reset matrix,score
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setResultPopup(false);
    };


  return (
    <div id='popup-container'>
        <div id="popup-message">
    <div id="winner-message">
      <h1 id="result-message">YOU WON!</h1>
      <div id="winner-declaration"><h1 id="o-message-symbol">O</h1><h1 id="round-message">&nbsp;&nbsp;TAKES THE ROUND</h1></div>
      
      <div id="quit-message-buttons">
        <button onClick={quit} id="quit-button">QUIT</button>
        <button onClick={playAgain} id="play-again-button">NEXT ROUND</button>
        
      </div>
    </div>
  </div></div>
  )
}

export default ResultPopup