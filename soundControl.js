module.exports = function soundControl() {

  if (status == 'none') {
        audio.play();
        audio.volume = 0.5;
        status = 'low';
        return;

  if (status == 'low')
        audio.volume = 1;
        status = 'high';
        return;

  if (status == 'high')
        audio.pause();
        status = 'none';
        return;
  }

  chrome.browserAction.setIcon({
    path: {
      "19": `assets/${status}19px.png`,
      "38": `assets/${status}38px.png`
    }
  });

}
