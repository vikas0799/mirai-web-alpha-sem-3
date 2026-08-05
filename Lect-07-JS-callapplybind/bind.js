
function greet(city, state, country) {
    // this ->user 
    console.log(this);
    console.log("hi");
    console.log(city);
    this.name="john wick";
    console.log(this);

    // console.log(this.name, city, state, country);
}

// greet("gaziaabd", "up", "india");

const user = {
    name:"Vikas",
    age: 30,
    college:"mirai"
};


let bindgreet=greet.bind(user,"gaziabad","up","india");
//  console.log(bindgreet);
// bindgreet("gaziabad","up","india"); // bind method
// greet("gaziabad","up","india"); // window
// console.log(user);
user.name="sagar";
bindgreet("lucknow","up","india");