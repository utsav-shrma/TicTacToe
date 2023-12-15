import { useState } from 'react'
import './App.css'
import Quote from './Quote/Quote'
import MainPage from './MainPage/MainPage'
import Gameplay from './Gameplay/Gameplay'



function App() {
  const [count, setCount] = useState(0);
  let [userLogo,setUserLogo]=useState(true);  //true--> O  and  false --> X
  let [startGame,setStartGame]=useState(false);
  
  const [matrix, setMatrix] = useState([
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]);

  // let setMainContainer=()=>{
  //   if(startGame){
  //     return <Gameplay userLogo={userLogo}></Gameplay>;
  //   }
  //   else{
  //     return <MainPage setStartGame={setStartGame} setUserLogo={setUserLogo}></MainPage>;
  //   }
  // }

  return (
    <>
      <div id="main">
      
      <Quote/>
      <div id="main-container">
       
       {startGame?<Gameplay userLogo={userLogo} matrix={matrix} setMatrix={setMatrix} setStartGame={setStartGame} />:<MainPage setStartGame={setStartGame} setUserLogo={setUserLogo}/>}
      
    </div>
  </div>
    </>
  )
}

export default App
