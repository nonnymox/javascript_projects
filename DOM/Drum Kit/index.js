let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let bgImage = window.getComputedStyle(button).backgroundImage;
    let imageUrl = bgImage.replace(/^url\(["']?|["']?\)$/g, ""); // Extracts only the URL
    let fileName = imageUrl.split("/").pop(); // Splitting the url into parts

    let sound = fileName.split(".png").join(".mp3");
    let audio = new Audio(`sounds/${sound}`);
    audio.play();
    // alert(`${key} was clicked`);
  });
});

// for (let i = 0; i < buttons.length; i++) {
//   let button = buttons[i];
//   button.addEventListener("click", function () {
//     let key = button.innerText;
//     // alert(`${key} was clicked`);
//     let audio = new Audio("sounds/tom-1.mp3");
//     audio.play;
//   });
// }
