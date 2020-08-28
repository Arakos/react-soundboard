import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SoundComp from './Kek'
import fs from 'fs'
import raw from './sounds/raaw.mp3'
import kalt from './sounds/kalt.mp3'


const head = <h1>Soundboard :D</h1>

//const constFunc = () => <h1>constfunc</h1>

class Combiner extends React.Component {
  render() {
    var sounds = []
    var soundCnt = 0;
    sounds[0] = new SoundComp({sound: raw, name: "raw", srcurl: "localhost:3000/sounds/raaw.mp3"}).render()
    sounds[1] = new SoundComp({sound: kalt, name: "kalt", srcurl: "localhost:3000/sounds/kalt.mp3"}).render()
    
    return (
      <div>
        {head}
        {sounds}
      </div>
    )
  }
}

ReactDOM.render(
  <Combiner/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
