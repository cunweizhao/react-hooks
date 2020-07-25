import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton'
import MoustTracker from "./components/MouseTracker";
import DogShow from "./components/DogShow";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";



const style = {
    width:200
}
const DogShowWithHook = () =>{
    const [data,loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
    return (
        <>
        {loading ? <p>读取中</p> : <img src={data.message} style={style}/>}
            </>
    )
}

function App() {
    const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{position.x}</h1>
        <DogShow/>
       <LikeButton/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
