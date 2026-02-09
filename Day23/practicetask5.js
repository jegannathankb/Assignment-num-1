class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

let d1 = new Dog();
d1.speak(); 
d1.bark();  
