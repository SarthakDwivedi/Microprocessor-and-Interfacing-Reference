let root = document.documentElement;
setInterval(setRandomColor, 1000);
setInterval(setRandomColor2, 3000);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    root.style.setProperty('--linear-gradient1', getRandomColor());
  }

  function setRandomColor2() {
    root.style.setProperty('--underline_color', getRandomColor());
  }
 