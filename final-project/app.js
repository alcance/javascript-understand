// gets a new object (the architecture allows us to not have to us the 'new' keyword)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

//let's use our object on the click of the login button
$('#login').click(function() {
  var loginGrtr = G$('Ivan', 'Dong'); // create new Greetr object

  $('#logindiv').hide(); // hide login elements inside logindiv container

  // set langage depending of select value
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})