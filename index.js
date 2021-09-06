//document.querySelector("button").addEventListener("click", handleClick);
var buttonList = document.querySelectorAll(".drum");
for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  var song = new Audio();
  switch (key) {
    case "w":
      song = new Audio("sounds/crash.mp3");
      song.play();
      break;
    case "a":
      song = new Audio("sounds/kick-bass.mp3");
      song.play();
      break;
    case "s":
      song = new Audio("sounds/snare.mp3");
      song.play();
      break;
    case "d":
      song = new Audio("sounds/tom-1.mp3");
      song.play();
      break;
    case "j":
      song = new Audio("sounds/tom-2.mp3");
      song.play();
      break;
    case "k":
      song = new Audio("sounds/tom-3.mp3");
      song.play();
      break;
    case "l":
      song = new Audio("sounds/tom-4.mp3");
      song.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (activeButton != null) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }

}
