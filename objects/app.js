var person = new Object();

person['first_name'] = 'Dong';
person['last_name'] = 'Martz';

var firstNameProperty = "first_name";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.first_name);
console.log(person.last_name);

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);
