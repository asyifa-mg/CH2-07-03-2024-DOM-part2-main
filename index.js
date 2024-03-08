function handleClick() {
  alert("ini button diclik");
}
var drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  // console.log[i]; //i merupakan array
  drumButtons[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
    //alert("ga ada button nya");
  }
}

function buttonAnimation(key) {
  //document.querySelector("." + key)
  let acctiveBtn = document.querySelector("." + key);
  acctiveBtn.classList.add("pressed");
  acctiveBtn.classList.add("white");

  setTimeout(function () {
    acctiveBtn.classList.remove("pressed");
    acctiveBtn.classList.remove("white");
  }, 100);
}
