import React,{ useState,useEffect,setQuitPopup,setResultPopup } from 'react';
import './Gameplay.css';
import imageUrl from "./pajamas_retry.png";
import GridBlock from './GridBlock';
import QuitPopup from './QuitPopup';
import ResultPopup from './ResultPopup';

function Gameplay({userLogo,matrix,setMatrix,setStartGame}) {
    
    let [resultPopup,setResultPopup]=useState(false);
    let [quitPopup,setQuitPopup]=useState(false);
      let [currTurn,setCurrTurn]=useState(userLogo);

      
    
  return (<>
  {(quitPopup)?<QuitPopup setQuitPopup={setQuitPopup} setMatrix={setMatrix} setStartGame={setStartGame} ></QuitPopup>:""}
    {(resultPopup)?<ResultPopup setResultPopup={setResultPopup} setMatrix={setMatrix} setStartGame={setStartGame}></ResultPopup>:""}
    <div id="gameplay-container">
         
        <div id="gameplay-top">
          <div id="mini-logo"><h1 id="x">x</h1><h1 id="o">&nbsp;o</h1></div>
          <div id="turn-indicator"><h1 id="turn-indicator-icon">{currTurn?'o':'x'}</h1><p>TURN</p></div>
          <button id="refresh-button" onClick={()=>{setQuitPopup(true); }}><img src={imageUrl}></img></button>
        </div>
        <div id="game-grid">
          
            { matrix.map((arr,i)=>(arr.map((logo,j)=>(<GridBlock logo={logo} i={i} j={j} matrix={matrix} setMatrix={setMatrix} currTurn={currTurn} setCurrTurn={setCurrTurn}></GridBlock>))))}
          
        </div>
        <div id="game-score">
          <div className="score-board" id="player-score"><p>X (YOU)</p><p>0</p></div>
          <div className="score-board" id="tie-score"><p>TIES</p><p>0</p></div>
          <div className="score-board" id="pc-score"><p>O (CPU)</p><p>0</p></div>
        </div>

      </div>
      </>
  )
}

export default Gameplay