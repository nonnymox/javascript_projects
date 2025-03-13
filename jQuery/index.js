// $("h1").css("color", "red"); //change the css property with jQuery
// $("h1").addClass("big-title margin-50"); //adds the classes to the  selected element
// $("button").text("Here!"); // Changes the text of all the buttons to "HERE"

// $("h1").hasClass("big-title"); // Checks if the element has the class returns true or false

// $("img").attr("src"); //Access the atrribute of an element

// $("a").attr("href", "knoxlevelit.com"); // Changing the attribute of the element

//Classes are also attributes

//Adding an event listener to an element
$("h1").click(function () {
  $("h1").addClass("big-title margin-50");
});

// Adding multiple event listeners
$("button").click(() => {
  $("h1").toggleClass("big-title margin-50"); // Toggling the class off and on
});

// Keypress event and logging the key
$("input").keypress((event) => {
  $("h1").text(event.key);
});

// on can be  used for different events like keypresses mouseover clicks,etc
$("h1").on("mouseover", () => {
  $("h1").css("color", "purple");
});

//Adding and removing elements with jQuery 
// "before" adds element before the selected element "after" is the opposite
// "prepend" adds the new element inside the tag before the element, "append" is the opposite
// .remove deletes the element

$("h1").before("<button>New</button>");

// jQuery Animations
// .hide() removes element .show() shows element
// fadeIn fadeOut fadeToggle slideUp slideDown
// animate fnct takes a css object with numeric val and applies
// we can chain the 
$("button").on("click", () =>{
    $("h1").animate({opacity: 0.5})
})