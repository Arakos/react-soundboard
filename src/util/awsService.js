import xmlToJs from 'xml-js'

const SB_CONTENT_URL = "https://soundboard-sounddata.s3-eu-west-1.amazonaws.com"

const SB_SOUNDS_KEY = "sounds/"

export const fetchSounds = () => {
    return fetch(SB_CONTENT_URL)
        .then((response) => response.text())
        .then((responseXML) => xmlToJs.xml2js(responseXML, {compact: true}))
        .then((responseJson) => processAWSdata(responseJson) )
        .catch((error) => {
          console.error(`Failed to fetch sound-data from server: ${error}`);
          return {
            "key": "unknown",
            "url": "unknown",
          }
        })
}

/**
 * 
 * @param {JSON} respJson 
 * @returns {JSON}
 */
function processAWSdata(respJson) {
    return respJson.ListBucketResult.Contents
      .map((contentData) => {
        return {
            "key": contentData.Key._text,
            "url": SB_CONTENT_URL + "/" + contentData.Key._text,
          }
      })
      .filter((data) => data.key.startsWith(SB_SOUNDS_KEY))
  }
