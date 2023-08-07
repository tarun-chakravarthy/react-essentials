import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import { useState, useEffect } from 'react';
import { ColorPicker } from './Form';
import { UserData } from './UserApi';
import { MyUserData } from './MyUser';

function App(props) {
  const [emotion, setEmotion] = useState("Happy");
  function changeMood() {
    if (emotion === "Happy") {
     setEmotion("Happier");
    } else {
     setEmotion("Happiest")
    }
  }
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion])
  return (
    <>
      <div className='App'>
        <Header name={"Mr.T"} profession="Frontend Developer"/>
        <p>
          Current Mood is {emotion} to {props.library}
        </p>
        <button onClick={changeMood}>Change Mood</button>
      </div>
      
      <div>
        <ColorPicker />
      </div>
      
      <div>
        <UserData />
      </div>
      
    </>
  );
}

export default App;
