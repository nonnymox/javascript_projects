document.querySelector("h1").addEventListener("click", function () {
  var player1 = Math.ceil(Math.random() * 6);
  var player2 = Math.ceil(Math.random() * 6);
  var player1src = `images/dice${player1}.png`;
  var player2src = `images/dice${player2}.png`;
  document.querySelector(".img1").setAttribute("src", player1src);
  document.querySelector(".img2").setAttribute("src", player2src);
  if (player1 === player2) {
    document.querySelector("h1").textContent = "It's a tie.";
  } else if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 wins.";
  } else {
    document.querySelector("h1").textContent = "Player 2 wins";
  }
});
