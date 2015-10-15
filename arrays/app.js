var arr = [
  1,
  false,
  {
    name: 'Dong',
    address: '111 Main St'
  },
  function(name){
    var greeting = 'Hello '
    console.log(greeting + name);
  }
];
console.log(arr);

arr[3](arr[2].name);

//gets the index 3 element in the array
//pass the object to the function
// arr[3](obj)
