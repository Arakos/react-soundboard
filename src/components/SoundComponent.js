import React from 'react';

import * as id3TagService from '../util/id3TagService'

class SoundComp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      audio: new Audio(props.url),
    }
  }

  componentDidMount() {
    id3TagService.fetchId3Data(this.props.url)
      .then((id3Tags) => {
        if(id3Tags.title.length) {
          this.setState({title: id3Tags.title})
        }
      })
  }

  render() {
      return (
        <div className="sound">
          <div>{this.state.title}</div>
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