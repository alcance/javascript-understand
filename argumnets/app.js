// like 'this' when Execution Context is created
// an 'arguments' property is also created

function greet(firstName, lastName, language) {

  // default value
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters');
    console.log('-----------------');
    return;
  }

  if (language === 'en') {
    console.log('Hello', firstName + ' ' lastName);
  }

  if (language === 'es') {
    console.log('Hola', firstName + ' ' lastName);
  }


  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log('arg 0:', arguments[0]);
  console.log('========================');
}

greet();
greet('Ivan');
greet('Ivan', 'Dong');
greet('Ivan', 'Dong', 'es');
greet('John', 'Doe', 'en');