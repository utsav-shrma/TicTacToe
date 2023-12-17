import React, { useEffect } from 'react'
import './GridBlock.css'

function GridBlock({userLogo,logo,i,j,matrix,setMatrix,currTurn,setCurrTurn,setResultPopup,userScore,setUserScore,pcScore,setPcScore,tieScore,setTieScore,turnCount,setTurnCount,result,setResult}) {

    let setIcon=()=>{  
        matrix[i][j]=currTurn;
        setMatrix(matrix);
        
        setCurrTurn(!currTurn);
        
    };


      
    // useEffect(()=>{
    //   console.log("Hooook",currTurn,userLogo);
    //   console.log();
    //   if(currTurn!=userLogo && turnCount<9)
    //   {
    //     // console.log('making a move');
    //     // makePCMove();
    //   }
    
    // });
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
       result=decideWin();
      console.log(matrix);
      setTimeout(()=>{
        if(result!=null)
      {
        
        setResult(result);
        if(result){
          console.log("winner is user")
          setResultPopup(true);
          setUserScore(++userScore);
        }
        else{
          console.log("winner is pc")
          setResultPopup(true);
          setPcScore(++pcScore);
           
        }
      }
      else{
  
        if(turnCount===9){
          setResultPopup(true);
          setTieScore(++tieScore);
          setResult(result);
        }
        //check if all turns have been made or not
          //set result tie or ignore
  
      }
      },1000);
  
      
      
  
    }
  

    let gridClick=  ()=>{
      
      if(logo===null) {
        setIcon();
      }
      setTurnCount(++turnCount);
      checkDeclareWinner();
      // makePCMove();
      //if(result==null){console.log("result",result); gridClick();}
      

    }
    // 
  return (<button onClick={()=>{gridClick();  }  } disabled={userLogo!=currTurn}  ><h1 className={logo===null?"o-symbol":(logo?"o-symbol":"x-symbol")}>{logo===null?"":(logo?"o":"x")}</h1></button>)
}

export default GridBlock