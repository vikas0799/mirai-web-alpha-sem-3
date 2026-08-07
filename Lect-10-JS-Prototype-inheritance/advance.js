// console.log(Number.prototype);

// let a=23.344545;
// console.log(a.toFixed(2));

// Number.prototype.toFixed=(x)=>{
//     console.log(x*x);
//     return "nahi karunga ";
// }
// console.log(a.toFixed(2));

// Number.prototype.vikas=(a)=>{
//     return a*a;
// };

// let a=90.766764;
// console.log(Number.prototype);
// console.log(a.toFixed(2));
// console.log(a.vikas(2));


Object.prototype.payment=()=>{
    console.log("fees paid.")
    return true;
}

let aarav="mirai fees";
console.log(aarav.__proto__.__proto__.payment());

let x=89;
console.log(x.__proto__.__proto__.payment());

