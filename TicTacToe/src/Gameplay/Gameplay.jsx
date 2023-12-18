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
  let [result, setResult] = useState(null);
  let [userScore, setUserScore] = useState(0);
  let [pcScore, setPcScore] = useState(0);
  let [tieScore, setTieScore] = useState(0);
  let [turnCount, setTurnCount] = useState(0);
  let [conseQuitiveTurn,setConseQuitiveTurn]=useState(userLogo);
  let [currTurn, setCurrTurn] = useState(userLogo);

  
  useEffect(()=>{
    console.log("state update",currTurn,userLogo);
   
    if(currTurn!=userLogo){

      console.log('makinfg move');
      
      if(result==null && turnCount<9){
        makePCMove();
        
      }
      
      
    }

  },[turnCount]);
  //////////////////

  function decidePcMove(){
      
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let availablePositons=[];
    let count=0;
    //diagonal check
    for (let row = 0; row < numRows; row++)
    {
      if(matrix[row][row]!=null){
          if(matrix[row][row]===userLogo){count++;}
          else{count--;}
      }

      else{
        availablePositons.push([row,row]);
        
      }
    }
    if(count===2){return availablePositons[0];}
    count=0;

    //reverse diagonal check
    for (let row = 0; row < numRows; row++)
    {
      if(matrix[row][numRows-row-1]!=null){
          if(matrix[row][numRows-row-1]===userLogo){count++;}
          else{count--;}
      }

      else{
        availablePositons.push([row,numRows-row-1]);
        
      }
    }
    if(count===2){return availablePositons[availablePositons.length-1];}
    count=0;

    //row wise check

    for (let row = 0; row < numRows; row++) {
      
      for (let col = 0; col < numCols; col++) {

        if(matrix[row][col]!=null){
          if(matrix[row][col]===userLogo){count++;}
          else{count--;}
        }
        else{
          availablePositons.push([row,col]);
        }
        
      }

      if(count===2){return availablePositons[availablePositons.length-1];}
    count=0;

     
      
    }

    //col wise check
    count=0;
    for (let col = 0; col < numCols; col++) {
      
      for (let row = 0; row < numRows; row++) {

        if(matrix[row][col]!=null){
          if(matrix[row][col]===userLogo){count++;}
          else{count--;}
        }
        else{
          availablePositons.push([row,col]);
        }
        
      }

      if(count===2){return availablePositons[availablePositons.length-1];}
    count=0;

     
      
    }

    //rturn random
    return(availablePositons[Math.floor(Math.random() * (availablePositons.length))]);





  }


  let decideWin=()=>{
    // console.log("");
    // console.log("");
    const numRows = matrix.length;
      const numCols = matrix[0].length;

      let trueWin=false;
      let falseWin=false;

      let trueWinDiagonal=true;
      let falseWinDiagonal=true;
      for (let row = 0; row < numRows; row++)
    {
      if(matrix[row][row]!=null){
        trueWinDiagonal=trueWinDiagonal&&matrix[row][row];
        falseWinDiagonal=falseWinDiagonal&&!matrix[row][row];
      }
      else{
        falseWinDiagonal=false;
        trueWinDiagonal=false;
        
      }
    }

    // console.log("diaogonal check for true",trueWinDiagonal);
    //   console.log("diaogonal check for false",falseWinDiagonal);

    trueWin=trueWin||trueWinDiagonal;
    falseWin=falseWin||falseWinDiagonal;

     trueWinDiagonal=true;
     falseWinDiagonal=true;

     for (let row = 0; row < numRows; row++)
    { 
      // console.log(row,numRows-row-1,matrix[row][numRows-row-1])
      if(matrix[row][numRows-row-1]!=null){
        trueWinDiagonal=trueWinDiagonal&&matrix[row][numRows-row-1];
        falseWinDiagonal=falseWinDiagonal&&!matrix[row][numRows-row-1];
      }
      else{
        falseWinDiagonal=false;
        trueWinDiagonal=false;
        
      }
    }
    
      
    trueWin=trueWin||trueWinDiagonal;
    falseWin=falseWin||falseWinDiagonal;

      // console.log("diaogonal check for true",trueWinDiagonal);
      // console.log("diaogonal check for false",falseWinDiagonal);

      
    
      

      for (let row = 0; row < numRows; row++) {
        let trueWinRow=true;
        let falseWinRow=true;
        for (let col = 0; col < numCols; col++) {

          if(matrix[row][col]!=null){
            trueWinRow=trueWinRow&&matrix[row][col];
            falseWinRow=falseWinRow&&!matrix[row][col];
          }
          else{
            trueWinRow=false;
            falseWinRow=false;
          }
          
        }

        if(trueWinRow||falseWinRow){
          trueWin=trueWin||trueWinRow;
          falseWin=falseWin||falseWinRow;
        //   console.log("row wise check for true",trueWinRow);
        // console.log("row wise check for false",falseWinRow);
          break;
        }
        
      }

      

      for (let col = 0; col < numCols; col++) {
        
      let trueWinCol=true;
      let falseWinCol=true;
      // console.log(col);
        for (let row = 0; row < numRows; row++) {
          // console.log(row,matrix[row][col]);
          if(matrix[row][col]!=null){
            trueWinCol=trueWinCol&&matrix[row][col];
            falseWinCol=falseWinCol&&(!matrix[row][col]);
          }
          else{
            trueWinCol=false;
            falseWinCol=false;
          }

          
        }
        if(trueWinCol||falseWinCol){
          trueWin=trueWin||trueWinCol;
        falseWin=falseWin||falseWinCol;
    //       console.log("col check for true",trueWinCol);
    // console.log("col check for false",falseWinCol);
          break;
        }
      }
      
      
      // console.log("final check for true",trueWin);
      // console.log("final check for false",falseWin);
     
    if(userLogo)
    {
      if(trueWin){
        
        return true;
      }
      else if(falseWin){
        
        return false;
      }
      else{
    return null;}

    }
    else{
      if(trueWin){
        
        return false;
      }
      else if(falseWin){
        
        return true;
      }
      else{
    return null;}

    }

    
  };


  let checkDeclareWinner=()=>{
     let tempresult=decideWin();
    console.log(matrix);
    setTimeout(()=>{
      if(tempresult!=null)
    {
      
      setResult(tempresult);
      if(tempresult){
        console.log("winner is user gameplay");
        setResultPopup(true);
        setUserScore(++userScore);
      }
      else{
        console.log("winner is pc gameplay");
        setResultPopup(true);
        setPcScore(++pcScore);
         
      }
    }
    else{

      if(turnCount===9){
        setResultPopup(true);
        setTieScore(++tieScore);
        
      }
      //check if all turns have been made or not
        //set result tie or ignore

    }
    },1000);

    
    

  }


  let makePCMove=()=>
  {
    
      setTimeout( ()=>{let pcMove=decidePcMove();
      console.log("executed");
        
        matrix[pcMove[0]][pcMove[1]]=!userLogo;
        console.log("Moove ",pcMove);
        setMatrix(matrix);
        

        setTurnCount(++turnCount);

        
        checkDeclareWinner();
        setCurrTurn(userLogo);
        
      },1000); //delay is in milliseconds 
     
    
      
      
  }


  /////////////////

  return (<>
    {(quitPopup) ? <QuitPopup setQuitPopup={setQuitPopup} setMatrix={setMatrix} setStartGame={setStartGame} setTurnCount={setTurnCount} setCurrTurn={setCurrTurn}conseQuitiveTurn={conseQuitiveTurn} ></QuitPopup> : ""}
    {(resultPopup) ? <ResultPopup setResultPopup={setResultPopup} setMatrix={setMatrix} setStartGame={setStartGame} setTurnCount={setTurnCount} result={result} userLogo={userLogo} setResult={setResult} currTurn={currTurn} setCurrTurn={setCurrTurn} conseQuitiveTurn={conseQuitiveTurn} setConseQuitiveTurn={setConseQuitiveTurn}></ResultPopup> : ""}
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
                                                                  result={result}
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