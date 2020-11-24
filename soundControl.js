module.exports =   function soundControl() {
  
    switch (status) {
      case 'none':
        audio.play()
        audio.volume = 0.5
        status = 'low'
        break
      case 'low':
        audio.volume = 1
        status = 'high'
        break
      case 'high':
        audio.pause()
        status = 'none'
        break
    }

    chrome.browserAction.setIcon({
      path: {
        "19": "images/" + status + "19px.png",
        "38": "images/" + status + "38px.png"
      }
    })

  }
