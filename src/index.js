import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import SoundComp from './components/SoundComponent'
import * as awsService from './util/awsService'


class Combiner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      soundsData: [],
    }
  }

  render() {
    var renderData = this.state.soundsData
      .map((data, idx) => <SoundComp key={idx} url={data.url} title={data.key}/>)

    if(renderData.length === 0) {
      renderData = <p>No sounds to display ...</p>
    }
    return (
      <div>
        <h1>Soundboard :D</h1>
        <div>
          {renderData}
        </div>
      </div>
    )
  }

  componentDidMount() {
    awsService.fetchSounds()
      .then((data) => this.setState({soundsData: data}))
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
