import React from 'react';

import * as id3TagService from '../util/id3TagService'

class SoundComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id3data: {
        title: props.title,
        artist: "",
        album: "",
      },
      audio: new Audio(props.url),
    }
  }

  componentDidMount() {
    id3TagService.fetchId3Data(this.props.url)
      .then((id3Tags) => {
        if(id3Tags) {
          this.setState({id3data: id3Tags})
        }
      })
  }

  render() {
      return (
        <div className="sounds">
          <p>{this.state.id3data.artist} - {this.state.id3data.title} ({this.state.id3data.album})</p>
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