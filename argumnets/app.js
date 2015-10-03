function greet(firstName, lastName, language) {
  
  // default value
  language = language || 'en';
  
  if (arguments.length === 0) {
    console.log('Missing parameters');
    console.log('-----------------');
    return;
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
