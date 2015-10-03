console.log(this);

function a() {
  console.log(this);
}

function b() {
  console.log(this);
}

a();
b();


// methods in objects 'this' points to the object
var c = {
  name: 'The c object',
  log: function() {
    console.log(this);
    var self = this;
    
    var setname = function(newName) {
      console.log(self);
      self.name = newName;
    }
    
    setname('Updated again! The c object');
    console.log(self);
  }
}

c.log();
