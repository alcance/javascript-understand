/*
* CREATE NEW EXECUTION CONTEXT FOR OUR ENTIRE LIBRARY
*/
;(function(global, $){

  // setup greetr object like JQuery set its up
  /* instead of function constructor
  * return results of a function contructor
  * create a function constrcutor that takes firstname lastname and language
  */

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  // setup data that cannot be changed
  var supportedLangs = ['en', 'es'];

  // informal greetings

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };


  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  Greetr.prototype = {
    // PUT ALL YOUR METHODS HERE EXPOSED
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }, // separate with comma. it is an object

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      };
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function(){
      return formalGreetings[this.language] + ' ' + this.fullName();
    },

    greet: function(formal) {

      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable

      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'JQuery not loaded';
      }

      if (!selector) {
        throw 'Missing JQuery selector'
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      // use JQuery

      $(selector).html(msg);

      return this;

    }

  };

  Greetr.init = function(firstName, lastName, language) {
    // use self for safety
    var self = this;

    self.firstName = firstName || '',
    self.lastName  = lastName || '',
    self.language = language || 'en'

    self.validate();

  }
  // any new object created will point Greetr.prototype for prototype chain
  Greetr.init.prototype = Greetr.prototype;

  // ATATCH GREETR TO THE GLOBAL OBJECT AND CREATE AN ALIAS
  global.Greetr = global.G$ = Greetr;


})(window, $);
