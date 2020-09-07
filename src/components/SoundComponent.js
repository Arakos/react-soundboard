import React from 'react';

import * as ps from '../services/PlayService'

class SoundComp extends React.Component {

  render() {
      return (
        <div className="sounds">
          <p>{this.props.metadata.artist} - {this.props.metadata.title} ({this.props.metadata.album})</p>
          <button onClick={() => ps.play(this.props.metadata.url, this.props.metadata.url)}>Play</button>
          <button onClick={() => ps.pause(this.props.metadata.url)}>Pause</button>
          <button onClick={() => ps.stop(this.props.metadata.url)}>Stop</button>
        </div>
      );
  }
}



export default SoundComp