guestList = ["Rose", "Balotelli", "Balloranking", "Michael", "Emmanuel"];
userName = prompt("Please enter your name.");
// Setting up a condition so only names in the guestlist can proceed
if (guestList.includes(userName)) {
  return "Permitted to enter...";
} else {
  return "Sorry not permitted";
}

// A function that takes a list of names and selects a random name
function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.
  var randomNumber = Math.floor(Math.random() * names.length);
  var name = names[randomNumber];

  return `${name} is going to buy lunch today!`;

  /******Don't change the code below*******/
}

//  The fizzbuzz game wih the output as an array.
var output = [];
var i = 1;
while (i <= 100) {
  if (i % 3 === 0) {
    output.push("Fizz");
  } else if (i % 5 === 0) {
    output.push("Buzz");
  } else if (i % 15 === 0) {
    output.push("FizzBuzz");
  } else {
    output.push(i);
  }
  i++;
}
console.log(output);

// 99 bottles of beer on the wall function
var i = 1;
while (i < 100 && i >= 0) {
  if (i === 0) {
    console.log(
      `No more bottles of beer on the wall,No more bottles of beer.\nGo to the store and buy some more, ${i} bottles of beer on the wall.`
    );
  } else {
    console.log(
      `${i} bottles of beer on the wall,${i} bottles of beer.\nTake one down and pass it around, ${i} bottles of beer on the wall.`
    );
  }
  i--;
}
