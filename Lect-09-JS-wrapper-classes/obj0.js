// let obj1={
//     name:"vikas",
//     age:23
// };
// let obj2={
//     name:"aarav",
//     age:32
// };

// console.log(Object.keys(obj1));
// console.log(Object.getOwnPropertyNames(obj1));


class animal {
    eat(){
        console.log("eating..");
    }
}

class dog extends animal{
    amount=2000;
    color ="red";
    bark(){
        console.log("barking ....");
    }
}


let charlie= new dog();
charlie.eat();
console.log(charlie);
console.log(Object.getOwnPropertyNames(charlie));

