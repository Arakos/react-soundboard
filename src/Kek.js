import React, { useState } from 'react';
import PropTypes from "prop-types";


class SoundComp extends React.Component {

  static propTypes = {
    srcurl: PropTypes.string,
    name: PropTypes.string,
    sound: PropTypes.any,
  }

  state = {
    audio: new Audio(),
  }

  constructor(props) {
    super(props)
    this.state.audio.src = props.sound
    console.log("url = " + this.state.audio.src)
  }

  static x = 1

  render() {
    this.myRef = React.createRef();
    console.log("url = " + this.state.audio.src)
      return (
        <div className="sound">
          <div>{this.props.name}</div>
          <div>{this.props.sound}</div>
          <button onClick={() => {
            this.state.audio.play();
           }}>Play</button>
          <button onClick={() => this.state.audio.pause()}>Pause</button>
        </div>
      );
  }
}

function KekFunction() {
    return (
      <div className="Kek">
          <p>This is a Kek paragraph</p>
      </div>
    );
  }


export default SoundComp