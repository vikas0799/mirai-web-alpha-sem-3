console.log(this);
// var a=90;
// console.log(this.a);
// console.log(window.a);
// console.log(window);


// let obj = {
//     full_name: "John",
//     age: 30,
//     city: "New York",
//     country: "USA",
//     displayInfo: function() {
//         console.log("hiii");
//         console.log(this);
//     },
//     " ":"dipesh singh"
// };
// obj.displayInfo();
//  console.log(obj.displayInfo);
//  console.log(obj.displayInfo());


// console.log(obj.city);
// console.log(obj["country"]);
// console.log(obj[" "]);
// console.log(obj. );

// displayInfo();
//  console.log(obj.displayInfo);
//  console.log(obj.displayInfo());




var a=90;
let mirai = {
    college: "Mirai",
    city: "gaziabad",
    country: "India",
    // displayInfo: function() {
    //     console.log("hiii");
    //     console.log(this);
    //     // return this;
    displayInf:()=>{
        console.log("hiii");
        console.log(this.a);
        // return this;
    }
};
mirai.displayInfo();
console.log(mirai.displayInfo);
console.log(mirai.displayInfo());
