import React from 'react';
import PropTypes from "prop-types";
//import mm from 'musicmetadata'
//import http from 'http'


class SoundComp extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      audio: new Audio(props.url),
    }
  }

  render() {
    //http.get(this.state.audio.src, res => mm(res, (err, data) => console.log(data)))

      return (
        <div className="sound">
          <div>{this.props.name}</div>
          <div>{this.props.url}</div>
          <button onClick={() => {
            this.state.audio.play();
           }}>Play</button>
          <button onClick={() => {
            this.state.audio.pause();
          }}>Pause</button>
          <button onClick={() => {
            this.state.audio.pause();
            var newAudio = this.state.audio;
            newAudio.currentTime = 0;
            this.setState({audio : newAudio})
          }}>Stop</button>
        </div>
      );
  }
}


export default SoundComp