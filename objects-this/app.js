/* REMEMBER: When a function is invoked a new EXECUTION CONTEXT
*  is created and put on the EXECUTION STACK
* Everytime a Execution Context it give us a 'this' variable
* !!! IMPORTANT
* 'this' value will depend of how the function is called
*/


// 'this' in funtions points to global this (window obj)

console.log(this);

function a() {
  console.log(this);
  this.newvariable = 'hello'
}

function b() {
  console.log(this);
}

a();
b();


// methods in objects 'this' points to the object
var c = {
  name: 'The c object',
  log: function() {
    console.log(this);
    var self = this;

    var setname = function(newName) {
      console.log(self);
      self.name = newName; // will look fo 'self' var in Outer Enviroment
    }

    setname('Updated again! The c object');
    console.log(self);
  }
}

c.log();
