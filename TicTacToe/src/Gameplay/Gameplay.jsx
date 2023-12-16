import React, { useState, useEffect, setQuitPopup, setResultPopup } from 'react';
import './Gameplay.css';
import imageUrl from "./pajamas_retry.png";
import GridBlock from './GridBlock';
import QuitPopup from './QuitPopup';
import ResultPopup from './ResultPopup';

function Gameplay({ userLogo, setStartGame }) {
  const [matrix, setMatrix] = useState([
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]);
  let [resultPopup, setResultPopup] = useState(false);
  let [quitPopup, setQuitPopup] = useState(false);
  let [result, setResult] = useState(true);
  let [currTurn, setCurrTurn] = useState(userLogo);
  let [userScore, setUserScore] = useState(0);
  let [pcScore, setPcScore] = useState(0);
  let [tieScore, setTieScore] = useState(0);
  let [turnCount, setTurnCount] = useState(0);
  

  

  return (<>
    {(quitPopup) ? <QuitPopup setQuitPopup={setQuitPopup} setMatrix={setMatrix} setStartGame={setStartGame} setTurnCount={setTurnCount} ></QuitPopup> : ""}
    {(resultPopup) ? <ResultPopup setResultPopup={setResultPopup} setMatrix={setMatrix} setStartGame={setStartGame} setTurnCount={setTurnCount} result={result} userLogo={userLogo} ></ResultPopup> : ""}
    <div id="gameplay-container">

      <div id="gameplay-top">
        <div id="mini-logo"><h1 id="x">x</h1><h1 id="o">&nbsp;o</h1></div>
        <div id="turn-indicator"><h1 id="turn-indicator-icon">{currTurn ? 'o' : 'x'}</h1><p>TURN</p></div>
        <button id="refresh-button" onClick={() => { setQuitPopup(true); }}><img src={imageUrl}></img></button>
      </div>
      <div id="game-grid">

        {matrix.map((arr, i) => (arr.map((logo, j) => (<GridBlock 
                                                                  userLogo={userLogo}
                                                                  logo={logo} 
                                                                  i={i} 
                                                                  j={j} 
                                                                  matrix={matrix} 
                                                                  setMatrix={setMatrix} 
                                                                  currTurn={currTurn} 
                                                                  setCurrTurn={setCurrTurn} 
                                                                  setResultPopup={setResultPopup} 
                                                                  userScore={userScore}
                                                                  setUserScore={setUserScore}
                                                                  pcScore={pcScore}
                                                                  setPcScore={setPcScore}
                                                                  tieScore={tieScore}
                                                                  setTieScore={setTieScore}
                                                                  turnCount={turnCount}
                                                                  setTurnCount={setTurnCount}
                                                                  setResult={setResult}></GridBlock>))))}

      </div>
      <div id="game-score">
        <div className="score-board" id="player-score"><p>{userLogo?'O':'X'} (YOU)</p><p>{userScore}</p></div>
        <div className="score-board" id="tie-score"><p>TIES</p><p>{tieScore}</p></div>
        <div className="score-board" id="pc-score"><p>{!userLogo?'O':'X'}  (CPU)</p><p>{pcScore}</p></div>
      </div>

    </div>
  </>
  )
}

export default Gameplay