class Animal {
    #a=90;
    b=89;
    c=78;
  eat() {
    console.log("Eating...");
    console.log(this.#a);
  }
  die(){
    console.log("marega hi");
  }
}

class Dog extends Animal {
    // b ,c
    //. eat die
  bark() {
    console.log("Woof");
  }
}

const sheru = new Dog();

sheru.eat();
sheru.bark();
console.log(sheru.b);
console.log(sheru.c);
// console.log(sheru.#a);   //private ko nahi kaer sakte    