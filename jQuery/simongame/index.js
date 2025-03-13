let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let started = false;

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNumber];
  $(`div#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  let sound = randomChosenColour + ".mp3";
  console.log(sound);
  let audio = new Audio(`sounds/${sound}`);
  audio.play();
  gamePattern.push(randomChosenColour);
  return gamePattern;
}
// console.log(nextSequence());

$(document).keypress(() => {
  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".btn").click(function (evt) {
  var clicked = evt.target;
  var userColor = clicked.id;
  userPattern.push(userColor);
  console.log(userPattern);
});

function playSound(name){
    
}