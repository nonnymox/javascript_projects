let buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     var key = button.textContent;
//     alert(`${key} was clicked`);
//   });
// });

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    let key = button.innerText;
    alert(`${key} was clicked`);
    var audio = new Audio("crash.mp3");
  });
}

