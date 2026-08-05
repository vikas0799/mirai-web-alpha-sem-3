// //call apply bind ( function borrowing..)
// // this ko custom set kar sakte ho ki kisko reference karega



let obj1={
    name:"vikas",
    age:27
};


let obj2={
    name:"aman",
    age:22
};



const user = {
    name:"Vikas",
    age:23,
    payment:false
};

// function greet(city,village){
    // console.log(this);
    // console.log(city);
    // this.name="depesh singh";
    // console.log(village);

    // this.payment=true;
// }
// greet("azamgarh","dasna");  //this -> window
// greet.call(user,"azamgarh","dasna");
let arr=["azamgarh","dasna",345,"aj ",true];
// greet.apply(user,["azamgarh","dasna"]);




function greet(...arr){
    console.log(this);
    console.log(arr);
}
greet.apply(user,arr);



// console.log(user);



// greet.call(user);
// greet.call(obj2);
// greet.call(obj1);

