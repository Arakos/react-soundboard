const SOUND_INDEX_URL = "http://localhost:8080/data/soundindex.json"

export const fetchSoundIndex = () => {
    return fetch(SOUND_INDEX_URL)
        .then(response => response.json())
        .then(resJson => resJson.metadata.sort((l,r) => {
                var artCmp = l.artist.localeCompare(r.artist)
                return artCmp !== 0 ? artCmp : l.title.localeCompare(r.title)
            })
        )
        .catch(error => {
          console.error(`Failed to fetch sound-data from server: ${error}`);
          return []
        })
}