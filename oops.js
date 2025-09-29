// 1. Class and Object
console.log("=== 1. Class and Object ===");
class Student {
    //propertices
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //method
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
//obj creations
let s1 = new Student("Vicky", 21);
s1.display();


// 2. Encapsulation (private variables with #)
console.log("\n=== 2. Encapsulation ===");
class BankAccount {
  #balance = 0; // private
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }
  getBalance() {
    return this.#balance;
  }
}
let acc = new BankAccount();
acc.deposit(500);
console.log("Balance:", acc.getBalance());


// 3. Abstraction (hide internal details)
console.log("\n=== 3. Abstraction ===");
class Car {
  start() {
    console.log("Car started using engine...");
  }
  stop() {
    console.log("Car stopped.");
  }
}
let car = new Car();
car.start();
car.stop();


// 4. Inheritance
console.log("\n=== 4. Inheritance ===");
class Animal {
  eat() {
    console.log("This animal eats food.");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog barks!");
  }
}
let d = new Dog();
d.eat();  
d.bark();


// 5. Polymorphism (same method, different behavior)
console.log("\n=== 5. Polymorphism ===");
class Shape {
  area() {
    return "Area not defined";
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
let shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log("Area:", s.area()));


// 6. Prototype
console.log("\n=== 6. Prototype ===");
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};
let p1 = new Person("Vignesh");
p1.sayHello();
