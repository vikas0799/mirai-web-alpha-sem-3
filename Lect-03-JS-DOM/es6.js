//arrow fn
//this
//backtics. template litrals

// let age=23;

// console.log("my age is 23");
// console.log(`my age is ${age}`);


// let obj = {
//     name: "Vikas",
//     dist:"azamgarh",
//     pin:252342
// };

// let {name,pin}=obj;
// console.log(name);
// console.log(pin);
// console.log(dist);



let mirai = {
    name: "Aarav",
    dist:"azamgarh",
    pin:252342
};
let aarav=mirai;   //no new memory created, reference passed
aarav.name="dipesh singh";


let aman = {...mirai};  // new memory created , not pass reference
aman.name="aman kumar";
console.log(aman==mirai); //false
console.log(aarav==mirai);  //true
console.log(aarav);  // name:dipesh singh 
console.log(mirai);  //name : dipesh singh

console.log(aman); //name: aman kumar




// console.log(student);



// let full_name=obj.name;

// let { name: fullName = "Guest",dist, age = 18 } = obj;

// console.log(fullName); // Vikas
// console.log(age);      // 18
// console.log(dist);     //azamgarh


//let name = "Vikas";
//let age = 25;

//let user = {
   // name,
   // age
//};

// console.log(user);
