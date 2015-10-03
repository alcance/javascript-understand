// by referece

var a = 3;
b = a;

a = 1;

console.log(a);
console.log(b);

// by reference (all objects(including functins))

var c = { greeting: 'hi'};
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);


// by reference (even as parameters)

function changeGreeting(obj){
  obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = { greeting: 'Howdy'}
console.log(c);
console.log(d);




