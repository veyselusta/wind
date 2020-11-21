const soundControl = require('./soundControl.js')
let status = 'none'
const audio = document.createElement('audio')

audio.setAttribute('src', 'wind.mp3')
audio.setAttribute('loop', 'true')

chrome.browserAction.onClicked.addListener(soundControl)
