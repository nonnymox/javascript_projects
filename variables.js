var myName = "Nonso";
alert("Hello " + myName)
var userName = prompt("What is your name?")

// Function to switch the value of two variables
function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = a;
    a= b
    b = c 

    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}



// console.log("Hello " + userName)

var userName = prompt("What is your name?")
const nameLength = userName.length
const charLeft = 280 - nameLength 
alert("You have typed " + nameLength + " characters and  have " + charLeft + " characters left.")