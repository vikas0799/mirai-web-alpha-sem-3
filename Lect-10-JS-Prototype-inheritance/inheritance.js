class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const charlie= new Dog();
// console.log(charlie.eat());

console.log(charlie.__proto__);
// console.log(Object.getOwnPropertyNames(charlie));

// console.log(Dog.prototype);

// console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Object.prototype);
// console.log(Number.prototype.__proto__ === Object.prototype);


// let str=new String ("vikas");
// // console.log(str.__proto__.__proto__.__proto__);
// console.log(Number.prototype.__proto__.__proto__);

// console.log(Number.prototype.__proto__==String.prototype.__proto__);

let a=90;
console.log(a.__proto__==Number.prototype);