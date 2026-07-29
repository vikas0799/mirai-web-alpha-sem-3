let obj={
    name:"John",
    age:30,
    city:"New York",
    country:"USA"
};

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}