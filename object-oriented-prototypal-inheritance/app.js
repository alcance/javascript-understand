/* OBJECT ORIENTED JAVASCRIPT AND PROTOTYPAL INHERITANCE
+ Creation of objects
* Classical VS Prototypal Inheritance
* !! INHERITANCE: One object gets access to the properties
* and methods of antoher object.
* PROTOTYPAL INHERITANCE:
* Símple: flexible, extensible and easy to understand
*
* UNDERSTANDING THE PROTOTYPE:
* [obj] -> (prop1) // obj.prop1
* All objects in JS have proto {}, a reference to another object
* PROTOTYPE CHAIN: Property or method among a sequence of objects
*/
var person = {
  firstname: 'Default',
  lastname: 'Defaul',
  getFullName : function () {
    return this.firstname + ' ' + this.lastname;
  }
};

var ivan = {
  firstname: 'Ivan',
  lastname: 'Dong'
};

// !!! DONT DO THIS. DEMO PURPOSES ONLY
ivan.__proto__ = person;
console.log(ivan.getFullName()); // Exceution Context now wich object originated it
// it gets the method from person prototype


var jane = {
  firstname: 'Jane'
};
jane.__proto__ = person;
console.log(jane.getFullName()); // prototype of person



/* EXTEND IS POSSIBLE BECAUSE REFLECTION
* REFLECTION: Object can look at itself.
* Listing and changing its property and methods
*/

for (var prop in ivan) {
  if (ivan.hasOwnProperty(prop)) {  // == obj.hasOwnProperty('firstname')
    console.log(prop + ': ' + ivan[prop]); // im getting also properties from the object prototype
  }
};

/*
* EXTEND: COMPLEMENT TO PROTOTYPAL INHERITANCE
*/
var karina = {
  address: '222 Second St.',
  eyes: 'brown',
  getFormalFullName: function() {
    return this.lastname + ' ' + this.firstname;
  }
};

var dong = {
  height: 1.90,
  getFirstName: function() {
    return firstname;
  }
};

var vala = {};

// Underscore.js library. Extending objects...
_.extend(vala, karina, dong); // it will add all properties and methods of 'karina' and 'ivan' to 'vala'.

// This is what's happening under the hood of the Underscore library
var createAssigner = function(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;

    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length

      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  }; // end return
};

var sofia = {};

var myExtends = createAssigner(Object.keys);
myExtends(sofia, karina, dong);