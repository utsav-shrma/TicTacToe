import React ,{useEffect}from 'react'
import './mainPage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MainPage({setStartGame,setUserLogo}) {
      
    const showToast = () => {
        console.log("toast");
        toast('Invite link copied ',{
          toastClassName: 'custom-toast',
          autoClose:500,
            position: toast.POSITION.TOP_RIGHT,
            
        })};
      
        useEffect(()=>{setUserLogo(true)},[]);
      

      let setSlider=(userOption)=>{
        let xButton=document.getElementById("x-button-span");
        let oButton=document.getElementById("o-button");
        let slider=document.getElementById("slider");
        if(userOption){
          //if user selects o

          xButton.style.color='white';
          oButton.style.color='#192a32';
          slider.style.marginLeft='260px';
          setUserLogo(true);
        }
        else{
          //if user selects x
          oButton.style.color='white';
          xButton.style.color='#192a32';
          slider.style.marginLeft='0px';
          setUserLogo(false);
        }

      };
  return (

    <div>
      <div id="gameplay-container">
    <div id="logo"><h1 id="x">x</h1><h1 id="o">&nbsp;o</h1></div>
    <div id="player-picker">
      <h1 id="playr-picker-title">PICK PLAYER</h1>
      <div id="player-picker-button">
        
        <button  id="x-button" onClick={()=>{setSlider(false)}} ><span id="x-button-span">x</span><div id="slider"></div></button>
        <button id="o-button" onClick={()=>{setSlider(true)}} >o</button>
      </div>
    </div>
    <button className="menu-button" id="new-game-button" onClick={()=>{setStartGame(true);}}>NEW GAME ( VS CPU )</button>
    <button className="menu-button"id="coming-soon-button">NEW GAME ( VS HUMAN ) Coming soon</button>
    <div id="empty-space"></div>
    <button className="menu-button"id="invite-button" onClick={showToast}>Invite your friend</button>
    <ToastContainer />
  </div></div>
  )
}

export default MainPage