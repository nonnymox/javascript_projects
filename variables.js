// var myName = "Nonso";
// alert("Hello " + myName);
// var userName = prompt("What is your name?");

// // Function to switch the value of two variables
// function test() {
//   var a = "3";
//   var b = "8";

//   /***********Do not change the code above 👆*******/
//   //Write your code on lines 7 - 9:
//   var c = a;
//   a = b;
//   b = c;

//   /***********Do not change the code below 👇*******/

//   console.log("a is " + a);
//   console.log("b is " + b);
// }

// // console.log("Hello " + userName)

// var userName = prompt("What is your name?");
// const nameLength = userName.length; // Saving the length in a variable
// const charLeft = 140 - nameLength; // Counting the characters left
// const sliced_name = userName.slice(0, 140); // Getting only the sliced text and saving to a variable
// alert(
//   "You have typed " +
//     nameLength +
//     " characters and  have " +
//     charLeft +
//     " characters left."
// ); // Alert
// alert(sliced_name.length); // Getting the length of the sliced string to confirm

var userName = prompt("What is your name?")

// new_name = userName[0].toUpperCase() + userName.slice(1); //Using indexing to target the first letter of name
var new_name = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase(); /// Using the char at method to target the first letter
alert("Hello "+ new_name);

var dogAge = prompt("What is your dog's age?")

humanAge = (dogAge -2 ) * 4 + 21

alert(humanAge)

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var maxAge = 90;
    var yearsLeft = 90 - age;
    console.log("You have " + (365 * yearsLeft) + " days, " + (52 * yearsLeft) + " weeks, and " + (12* yearsLeft) + " months left.")
    
    
    
    
/*************Don't change the code below**********/
}


function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var maxAge = 90;
        var yearsLeft = 90 - age;
        console.log("You have " + (365 * yearsLeft) + " days, " + (52 * yearsLeft) + " weeks, and " + (12* yearsLeft) + " months left.")
        
        
        
        
    /*************Don't change the code below**********/
    }
    