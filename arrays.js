// guestList = ["Rose", "Balotelli", "Balloranking", "Michael", "Emmanuel"];
// userName = prompt("Please enter your name.");
// // Setting up a condition so only names in the guestlist can proceed
// if (guestList.includes(userName)) {
//   return "Permitted to enter...";
// } else {
//   return "Sorry not permitted";
// }

// // A function that takes a list of names and selects a random name
// function whosPaying(names) {
//   /******Don't change the code above*******/

//   //Write your code here.
//   var randomNumber = Math.floor(Math.random() * names.length);
//   var name = names[randomNumber];

//   return `${name} is going to buy lunch today!`;

//   /******Don't change the code below*******/
// }

// //  The fizzbuzz game wih the output as an array.
// var output = [];
// var i = 1;
// while (i <= 100) {
//   if (i % 3 === 0) {
//     output.push("Fizz");
//   } else if (i % 5 === 0) {
//     output.push("Buzz");
//   } else if (i % 15 === 0) {
//     output.push("FizzBuzz");
//   } else {
//     output.push(i);
//   }
//   i++;
// }
// console.log(output);

// // 99 bottles of beer on the wall function
// function bottles() {
//   var i = 99;
//   while (i < 100 && i >= 0) {
//     if (i === 0) {
//       console.log(
//         `No more bottles of beer on the wall,No more bottles of beer.\nGo to the store and buy some more, ${i} bottles of beer on the wall.`
//       );
//     } else {
//       console.log(
//         `${i} bottles of beer on the wall,${i} bottles of beer.\nTake one down and pass it around, ${i} bottles of beer on the wall.`
//       );
//     }
//     i--;
//   }
// }

// bottles();

// function fibonacciGenerator(n) {
//   //Do NOT change any of the code above 👆

//   //Write your code here:
//   var myArray = [0, 1];
//   for (var count = n; n > 0; n--) {
//     var nextNumber = myArray[myArray.length - 1] + myArray[myArray.length - 2];
//     myArray.push(nextNumber);
//   }
//   return myArray.slice(0, count);

//   //Return an array of fibonacci numbers starting from 0.

//   //Do NOT change any of the code below 👇
// }

// console.log(fibonacciGenerator(12));


// Fibonacci sequence = [0,1,1,2,3,5,8,13,21....]


