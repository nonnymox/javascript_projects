let buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     button.classList.toggle("pressed");
//     let bgImage = window.getComputedStyle(button).backgroundImage;
//     let imageUrl = bgImage.replace(/^url\(["']?|["']?\)$/g, ""); // Extracts only the URL
//     let fileName = imageUrl.split("/").pop(); // Splitting the url into parts

//     let sound = fileName.split(".png").join(".mp3");
//     let audio = new Audio(`sounds/${sound}`);
//     audio.play();
//     // alert(`${key} was clicked`);
//   });
// });

// Angela Yu's Method

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i]; // we can use this instead if the index to refer to the object
  button.addEventListener("click", function () {
    let key = this.innerText;
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick = new Audio("sounds/kick.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom4.mp3");
        tom4.play();
        break;
      default:
        console.log("key");
    }
  });
}
