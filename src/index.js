import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";
import * as serviceWorker from './serviceWorker';
import SoundComp from './SoundComponent'


const head = <h1>Soundboard :D</h1>

const SB_CONTENT_URL = 'http://localhost:8080/sounds/'


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
    var renderData = this.state.soundsData.map(
      (data, idx) => <SoundComp key={idx} soundURL={SB_CONTENT_URL + data.name} name={data.name}/>
    )
    if(renderData.length === 0) {
      renderData = "No sounds to display ..."
    }
    return (
      <div>
        {head}
        {renderData}
      </div>
    )
  }

  componentDidMount() {
    fetch(SB_CONTENT_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({soundsData: responseJson})
      })
      .catch((error) => {
        console.error(`Failed to fetch sound-data from server: ${error}`);
      }
    );
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
