var Dong = { 
  firstname: 'Dong', 
  lastname: 'Martz' ,
  address: {
    street: '111 Main St.',
    city: 'Hermosillo',
    state: 'Son'
  }
};
console.log(Dong);

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Dong);

greet({ 
  firstname: 'Mary', 
  lastname: 'Poppins'
});

Tony.address2 = {
  street: '333 Second St.'
}