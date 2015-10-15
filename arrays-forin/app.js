Array.prototype.myCustomFeature = 'cool'; // Add eature to arrays

var arr = [
  'Ivan',
  'Vala',
  'Karina'
];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}

// Use this for arrays
for (var i = 0; i < arr.legth; i++) {
  //TODO
}