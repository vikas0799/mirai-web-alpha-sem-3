function expression(x) {
        document.getElementById("exp").value = document.getElementById("exp").value + x;   
}
function clearAll() {
    document.getElementById("exp").value = "";
    document.getElementById("res").value = "";
}
function clearElement(){
    let str=document.getElementById("exp").value;
    str = str.slice(0, -1);
    document.getElementById("exp").value=str;
}
function result(){
    let y=document.getElementById("exp").value;
    y=eval(y);
    document.getElementById("exp").value="";
    document.getElementById("res").value=y;
}
// Amitoz //

//<<<<<<< ayush
//console.log("stan");
//=======
//<<<<<<< Dhruv
// console.log("Dhruv");
//=======
// new changes commited khyati 
//>>>>>>> master
//>>>>>>> master
