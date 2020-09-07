
var sounds = new Map()

export const play = (key, url) => {
    var audio = sounds.get(key)
    if(!audio) {
        audio = new Audio(url)
        sounds.set(key, audio)
    }
    return audio.play()
}

export const pause = (key) => {
    if(sounds.has(key)) {
        sounds.get(key).pause()
    }
}

export const stop = (key) => {
    if(sounds.has(key)) {
        pause(key)
        sounds.get(key).currentTime = 0
    }
}
