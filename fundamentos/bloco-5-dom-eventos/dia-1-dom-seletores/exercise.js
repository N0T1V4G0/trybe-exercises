function changeP() {
  document.querySelectorAll('p')[1].innerText = "Um texto muito legal sobre como eu estarei daqui há 2 anos!";
}

changeP();

function changeBoxColor() {
  let box = document.getElementsByClassName('main-content')[0];
  box.style.background = "rgb(76,164,109)";
}

changeBoxColor();

function changeCenterBoxColor() {
  let centerBox = document.querySelector('.center-content');
  centerBox.style.background = 'white';
}

changeCenterBoxColor();