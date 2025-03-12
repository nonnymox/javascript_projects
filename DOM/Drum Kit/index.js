let buttons = document.querySelectorAll("button");

//function that will do the search
function makeSound(key) {
  key.classList.add("pressed");
  let bgImage = window.getComputedStyle(key).backgroundImage;
  let imageUrl = bgImage.replace(/^url\(["']?|["']?\)$/g, ""); // Extracts only the URL
  let fileName = imageUrl.split("/").pop(); // Splitting the url into parts

  let sound = fileName.split(".png").join(".mp3");
  let audio = new Audio(`sounds/${sound}`);
  audio.play();
  setTimeout(function () {
    key.classList.remove("pressed");
  }, 100);
  // alert(`${letter} was clicked`);
}

//
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    makeSound(button);
  });
});

// Attach a single keydown event listener to document
document.addEventListener("keydown", (e) => {
  buttons.forEach((button) => {
    if (e.key.toLowerCase() === button.innerText.toLowerCase()) {
      makeSound(button);
    }
  });
});
