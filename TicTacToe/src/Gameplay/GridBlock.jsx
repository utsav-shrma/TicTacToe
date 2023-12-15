import React from 'react'
import './GridBlock.css'

function GridBlock({logo,i,j,matrix,setMatrix,currTurn,setCurrTurn}) {

    let setIcon=()=>{  
        matrix[i][j]=currTurn;
        setMatrix(matrix);
        setCurrTurn(!currTurn);
    }
  return (<button onClick={()=>{if(logo===null) setIcon();}}><h1 className={logo===null?"o-symbol":(logo?"o-symbol":"x-symbol")}>{logo===null?"":(logo?"o":"x")}</h1></button>)
}

export default GridBlock