
function Car(name) {
    this.name = name;
  }
  Car.prototype.start = function() {
    return "engine of "+this.name + " starting...";
  };
  var c1 = new Car("Audi");
  var c2 = new Car("BMW");

  //To call this.start
  c2.say = function() {
    console.log("Hello, " + this.start());
  };
  c2.say();  //"Hello, engine of Fiesta starting..."