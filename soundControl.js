module.exports = function soundControl() {

  if (status == 'none') {
        audio.play();
        audio.volume = 0.5;
        status = 'low';

  if (status == 'low')
        audio.volume = 1;
        status = 'high';
        
  if (status == 'high')
        audio.pause();
        status = 'none';
  }

  chrome.browserAction.setIcon({
    path: {
      "19": `assets/${status}19px.png`,
      "38": `assets/${status}38px.png`
    }
  });

}
