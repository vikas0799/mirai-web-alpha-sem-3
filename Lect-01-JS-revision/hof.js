function sum(a, b) {
    console.log("hiii");
    b();
    return b;
}

let x=90;
let y=()=>{
    console.log("hiii");
    cosnole.log("by");
}
let ans=sum(x,y);
console.log(ans);
ans();