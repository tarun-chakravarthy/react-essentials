import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import { useState, useEffect } from 'react';
import { ColorPicker } from './Form';
import { UserData } from './UserApi';
import { PracticeReact } from './PracticeChallenges'

function App(props) {
  const [emotion, setEmotion] = useState("Happy");
  function changeMood() {
    if (emotion === "Happy") {
     setEmotion("Happier");
    } else {
     setEmotion("Happiest");
    }
  }
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion])
  return (
    <>
      <div className='container'>
        <PracticeReact />
      </div>
      <main className='container'>
        <section className='row'>
        <div className='App col-12'>
          <Header name={"Mr.Dev"} profession="Dev's World"/>
          <p className='greenText'>
            Always be {emotion}! 
          </p>
          <button onClick={changeMood} className='btn btn-primary' >Change Mood</button>
        </div>
        </section>
      </main>
      
      <div className='container'>
        <ColorPicker />
      </div>
      
      <div className='container'>
        <UserData />
      </div>
      
    </>
  );
}

export default App;
