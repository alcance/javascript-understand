// Function expressions retun value
var a;
a = 3; // returns value
1 + 2; // returns value
a = {greeting: 'hi'};

// Function statements
if (a === 3/*expression*/){  // if statement. does not return a value

}

greet();
// it gets hoisted (in memory)
function greet(){
  console.log('hi');
} // function statement. Does not returns value until functions is executed


//function expression
var anonymousGreet = function () {
  console.log('hi');   // returns an object
}
anonymousGreet();


// FUNCTIONAL PROGRAMMING
//pass functions to functions

function log(func) {
  func();  // use them like you do variables
}

log(function(){
  console.log('hi');
})
