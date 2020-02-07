var assignButton = document.getElementById('random-button');
var clearButton = document.getElementById('clear-button');
var centerDiv = document.getElementById('center-div');
var leftDiv = document.getElementById('left-div');
var rightDiv = document.getElementById('right-div');

var leftImages = [];
var rightImages = [];

var images = {
    "image0": 1,
    "image1": 1,
    "image2": 2,
    "image3": 3,
    "image4": 1,
    "image5": 1,
    "image6": 1,
    "image7": 1,
    "image8": 1,
    "image9": 1
  };

assignButton.addEventListener("click", randomMoves);
clearButton.addEventListener("click", clear);

function randomMoves() {
  var imagesList = []
  for (var key in images) {
    for (var i = 0; i < images[key]; i++) {
      imagesList.push(key);
    }
  }

  var acc = 0;
  while (imagesList.length > 0) {
    var randIdx = Math.floor(Math.random() * imagesList.length);
    if (acc % 2 == 0) {
      leftImages.push(imagesList[randIdx]);
    } else {
      rightImages.push(imagesList[randIdx]);
    }
    imagesList = imagesList.filter(function(value, index, arr) { return value != imagesList[randIdx] });
    acc++;
  }

  for (var i = 0; i < leftImages.length; i++) {
    console.log(i * 2000);
    setTimeout(moveImage, ((i + 1) * 2000 - 1000), leftImages[i], leftDiv);
    setTimeout(moveImage, ((i + 1) * 2000), rightImages[i], rightDiv);
  }
}

function clear() {
  for (var key in images) {
    moveImage(key, centerDiv);
  }
  leftImages = [];
  rightImages = [];
}

function moveImage(imageName, toDiv) {
  image = document.getElementById(imageName);
  toDiv.appendChild(image);
}
