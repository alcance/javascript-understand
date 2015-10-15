/*
* Object create. Functions construction MIMIC other languages
* CLASSES: Define objects looks like
* Javascript use PROTOTYPAL INHERITANCE
* !IMPORTANT
* There are other way to create objects wich does not mimic
*
* Object.create
*
* >>>>  PURE PROTOTYPAL INHERITANCE <<<<
*/



/*
* POLYFILL: Code that adds a FEATURE
* which the engine may lack.
*
*
*/
Object.create;
if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + 'only accepts the first parameter.');
    }
    function F() = {}
    F.prototype = o;
    return new F();
  }
}



var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function(){
    // use this to not look for the current E.C. (Execution Context)
    return 'Hi ' + this.firstname;
  }
}

// creates a blank object with its prototype to the obj passed.
var dong = Object.create(person);
dong.firstname = 'Ivan';
dong.lastname = 'Dong';
console.log(dong);
