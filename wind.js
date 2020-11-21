const soundControl = ('./soundControl.js')
let status = 'none'
const audio = document.createElement('audio')

audio.setAttribute('src', 'rain.mp3')
audio.setAttribute('loop', 'true')

chrome.browserAction.onClicked.addListener(soundControl)