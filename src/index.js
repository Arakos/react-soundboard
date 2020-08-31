import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";

import * as serviceWorker from './serviceWorker';

import SoundComp from './components/SoundComponent'
import {fetchSounds} from './util/awsAdapter'


class Combiner extends React.Component {

  static propTypes = {
    soundsData: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      soundsData: [],
    }

  }

  render() {
    var renderData = this.state.soundsData
  .map((data, idx) => {console.log(data); return <SoundComp key={idx} url={data.url} name={data.name}/>})

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
    fetchSounds((data) => this.setState({soundsData: data}))
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
