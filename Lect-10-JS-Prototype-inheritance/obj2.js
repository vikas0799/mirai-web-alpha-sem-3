class Animal{
    eat(){
        console.log("eating.");
    }
}

class Dog extends Animal{
    bark(){
        console.log("barking");
    }
}


let charlie = new Dog();

console.log(Object.getPrototypeOf(charlie))

// console.log(charlie);
// console.log(charlie.__proto__);
// console.log(Dog.prototype.__proto__.__proto__);
// console.log(Dog.prototype);



