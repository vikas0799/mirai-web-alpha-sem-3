class Car {
    //public properties
    price;
    color;
    model_no;
    compnay;
    fuel;
    year;
    constructor(company) {
        this.company = company;
    }
    // constructor(fuel, year) {
    //     this.fuel = fuel;
    //     this.year = year;
    // }
    // constructor(pri, col, mod) {
    //     this.price = pri;
    //     this.color = col;
    //     this.model_no = mod;
    // }

    start() {
        console.log("Car is starting");
    }
    stop() {
        console.log("Car is stopping");
    }
}

// java support multiple constructor but javascript does not support multiple constructor. 
// so we can use only one constructor in javascript. 
// if we use multiple constructor then the last constructor will be considered and the previous constructors will be ignored.
//method overloading is not supported in javascript.

let tata = new Car("TATA Motors");
let bmw = new Car("M series", 2025);
let mahindra = new Car(150000, "blue", 456);
let audi = new Car(200000, "red", 789);
let mercedes = new Car(300000, "black", 123);
console.log(tata);

// tata.color="green";
// console.log(tata);

// let mahondra=new Car(150000,"blue",456);
// console.log(mahondra);
// console.log(tata.price);
// console.log(tata.color);
// console.log(tata.model_no);
// tata.start();
