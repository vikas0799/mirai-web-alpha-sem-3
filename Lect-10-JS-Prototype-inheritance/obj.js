let str="vikas";
let num=20;
let present= false;
let student={
    name:"vikas",
    age:23
};
// console.log(student.__proto__==Object.prototype);
// console.log(Object.getOwnPropertyNames())

function sum(){
    console.log("hi")
};

// console.log(sum.__proto__.__proto__);
sum.a=90;
console.log(sum.a);