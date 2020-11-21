let status = 'none'
const audio = document.createElement('audio')

audio.setAttribute('src', 'rain.mp3')
audio.setAttribute('loop', 'true')

function soundControl() {

    if (status == 'none') {
        audio.play()
        audio.volume = 0.5
        status = 'low'
        return 

    if (status == 'low')
        audio.volume = 1
        status = 'high'
        return 

    if (status == 'high')
        audio.pause()
        status = 'none'
        return 
    }

    chrome.browserAction.setIcon({
        path: {
          "19": "images/" + status + "",
          "38": "images/" + status + ""
        }
      })

    }

    chrome.browserAction.onClicked.addListener(soundControl)