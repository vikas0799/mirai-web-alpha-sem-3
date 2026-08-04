class person{
    name;
    age;
    dist;
    constructor(name,age,dist){
        this.name=name;
        this.age=age;
        this.dist=dist;
    }
    walk(){
        console.log(`${this.name} is walking.`);
    }
    run(){
        console.log(`${this.name} is running.`);
    }
}

let anjali=new person("Anjali",22,"Pune");
// console.log(anjali);
console.log(anjali.name);
let seeta=anjali;
seeta.name="Seeta";
console.log(anjali.name);
console.log(seeta.name);



let geeta={...anjali};
geeta.name="Geeta";
console.log(geeta.name);
console.log(anjali.name);



// let saif=new person("saif ullah ",93,"prayagraj");
// console.log(saif);
// saif.walk();
// saif.run();
// saif.name="saif ali khan";
// console.log(saif);
