// CLOSURES



function greet(whattosay){

  return function(name){  // it returns a function instead of string or value
    console.log(whattosay + ' ' + name);
  }// got a function and it is invokable!!
}

// invoking a function that is returning a function,
greet('Hi')('Ivan');//is invokable also.


var sayHi = greet('Hola');
sayHi('Dong')  // how does it know that value if the Execution Stack has been ended
// when the Execution Context finshes the variables are still in memory.
// It goes down the scope chain


function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    arr.push(
      function() {
        console.log(i);
      }
    )

  }

  return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();  // que valores va a regresar ?





function buildFunctions2() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    //let j = i; // for new js ECMA 6
    // we need to get a new EC everytime we execute this function
    arr.push(
      (function(j){ // IIFE to get every 'i' value
        return function(){
          console.log(j);// this push will execute the result of the function
        }
      })(i)
    )

  }

  return arr;
}


var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();  // que valores va a regresar ?










