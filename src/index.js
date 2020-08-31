import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types";
import * as serviceWorker from './serviceWorker';
import SoundComp from './SoundComponent'
import xmlToJs from 'xml-js'


const head = <h1>Soundboard :D</h1>

const SB_CONTENT_URL = "https://soundboard-sounddata.s3-eu-west-1.amazonaws.com"

const SB_SOUNDS_KEY = "sounds/"


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
      .map((data, idx) => <SoundComp key={idx} soundURL={SB_CONTENT_URL + "/" + data} name={data}/>)

    if(renderData.length === 0) {
      renderData = <p>No sounds to display ...</p>
    }
    return (
      <div>
        {head}
        <div>
          {renderData}
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetch(SB_CONTENT_URL)
      .then((response) => response.text())
      .then((responseXML) => xmlToJs.xml2js(responseXML, {compact: true}))
      .then((responseJson) => {
        var data = responseJson.ListBucketResult.Contents
          .map((data) => data.Key._text)
          .filter((key) => key.startsWith(SB_SOUNDS_KEY))
        this.setState({soundsData: data})
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
