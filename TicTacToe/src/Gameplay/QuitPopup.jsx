import styles from'./QuitPopup.module.css'
import React from 'react'


function QuitPopup({setQuitPopup,setMatrix,setStartGame}) {

    let playAgain=()=>{
        //reset matrix,score
        setQuitPopup(false);
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setQuitPopup(false);
    };

    let quit=()=>{
        //reset matrix,score
        setMatrix([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
        
        setQuitPopup(false);
        setStartGame(false);
    };

  return (
    <div id={styles['popup-container']}>
    <div id={styles["quit-message"]}>
       
    
    <h1>Do you want to quit?</h1>
    <div id={styles["quit-message-buttons"]}>
      <button onClick={playAgain} id={styles["play-again-button"]}>PLAY AGAIN</button>   
      <button onClick={quit} id={styles["quit-button"]}>QUIT</button>
    </div>
  </div>
  </div>
  )
}

export default QuitPopup