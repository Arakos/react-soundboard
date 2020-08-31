import * as mm2 from 'music-metadata-browser';

/**
 * @param {string} url 
 */
export const fetchId3Data = (url) => {
    return mm2.fetchFromUrl(url, {skipCovers: true})
        .then((data) => {
            console.log(data);
            return {
                "title": data.common.title,
                "artist": data.common.artist,
                "album": data.common.album,
            }
        })
        .catch((err) => {
            console.log("failed to fetch id3-tag data:" + err)
            return {
                "title": "",
                "artist": "",
                "album": "",            
            }
        })
}