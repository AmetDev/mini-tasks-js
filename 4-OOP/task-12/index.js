class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, legs, species);
    this.legs = 0;
    this.species = "shark"
    this.status = status
  }
}

const shark = new Shark('BILLY', 3, 'Alive and well')
console.log(shark)
var charles = new Shark("Charles", 8, "Finding a mate");
console.log(charles)

class Cat extends Animal {
  constructor(name, age, status, legs, species){
    super(name, age , legs, species)
    this.legs = 4;
    this.species = "cat"
    this.status = status
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}
var spitsy = new Cat("Spitsy", 6, "sleeping");
console.log(spitsy.introduce())


class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(name, age, legs, species)
    this.legs = 4;
    this.species = "dog"
    this.status = status
    this.master = master
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}
var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(doug)
console.log(doug.introduce())
console.log(doug.greetMaster())