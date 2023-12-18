import React from 'react'
import './ResultPopup.css'
function ResultPopup({setResultPopup,setMatrix,setStartGame,setTurnCount,result,userLogo,setResult,currTurn,setCurrTurn,conseQuitiveTurn,setConseQuitiveTurn}) {

    let quit=()=>{
        //reset matrix,score
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setResultPopup(false);
        setStartGame(false);
        setTurnCount(0);
        setResult(null);
        
        
    };

    let playAgain=()=>{
        //reset matrix,score
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setResultPopup(false);
        setTurnCount(0);
        setResult(null);
        setCurrTurn(!conseQuitiveTurn);
        setConseQuitiveTurn(!conseQuitiveTurn);
        console.log("Next Turn is --------------->", currTurn);
        
        
    };

    let tieMessage='IT\'S A TIE!';
    let userWinMessage='YOU WON!';
    let pcWinMessage='YOU LOST';
    let tieRematchMessage='NICE TRY, REMATCH ? ';
    let resultMessage='TAKES THE ROUND';

  return (
    <div id='popup-container'>
        <div id="popup-message">
    <div id="winner-message">
      <h1 id="result-message">{result==null?tieMessage:(result?userWinMessage:pcWinMessage)}</h1>
      
      <div id="winner-declaration">{result==null?"":(<h1 id={(result?userLogo:!userLogo)?"o-message-symbol":"x-message-symbol"}>{(result?userLogo:!userLogo)?'o':'x'}</h1>)}<h1 id="round-message">{result==null?tieRematchMessage:resultMessage}</h1></div>
      
      <div id="quit-message-buttons">
        <button onClick={quit} id="quit-button">QUIT</button>
        <button onClick={playAgain} id="play-again-button">NEXT ROUND</button>
        
      </div>
    </div>
  </div></div>
  )
}

export default ResultPopup