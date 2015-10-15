String.prototype.isGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("Ivan".isGreaterThan(3));
console.log("Ivan".isGreaterThan(5));

Number.prototype.isPositive = function() {
  return this > 0;
}

/*
* Buit in Function Constructor can be dangerous
* for primivite types: String, Number, etc.
*/
var a = 3; // primivite

var b = new Number(3); // object created with function constructor

a == b; // it converts to same type (coercion) and is true
a === b; // not the same type is false.
