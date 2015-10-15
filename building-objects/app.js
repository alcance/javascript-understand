/*
* JAVASCRIPT DOES NOT HAVE CLASSES
* var john  = new Person()
* Function constructor a 'new' keyword
*/


/*
* FUNCTION CONSTRUCTORS: A normal function that is used
* to construct objects.
* The 'this' variable points a new empty object
* That object is retruned from the function automatically.
*/

function Person(firstname, lastname) {

  console.log(this); // 'this' points to empty object by now

  // adding properties
  this.firstname = firstname,
  this.lastname = lastname

  console.log('This function is invoked');

}
/* Construct/build objects
* give properties and methods
* and set its Prototype
*/

// PROTOTYPE //
Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
} // this is more efficient because you create only one copy in memory

// 'new' is Java like (Marketing bull)

var vala = new Person('Vala', 'Licious'); // invoking Person generates an Execution Context with 'this' property
console.log(vala);

var kary = new Person('Kary', 'Lups');
console.log(kary);

Person.prototype.getFormalFullName = function() {
  return this.lastname + ' ' + this.firstname;
}

console.log(vala.getFormalFullName());


/*
* BUILT IN FUNCTION CONSTRUCTORS
* Ready to use inside javascript engine
*/

