// let ans=document.getElementsByTagName("h1");
// console.log(ans[0]);
// ans[1].innerHTML="mirai school of technology";

// let i = 0;
// function display() {
//     // console.log("hello world");
//     // console.log("odin ");
//     if (i % 2 == 0) {
//         let ans = document.getElementsByTagName("h1");
//         // console.log(ans[0]);
//         ans[1].innerHTML = "mirai school of technology";
//     }
//     else{
//         let ans = document.getElementsByTagName("h1");
//         // console.log(ans[0]);
//         ans[1].innerHTML = "hello world 2";    
//     }
//     console.log(i);
//     i++;

// }

let i =0;

//event listeners
document.getElementById("btn").addEventListener("click", ()=>{
    console.log("hello world");
        // console.log("hello world");
    // console.log("odin ");
    if (i % 2 == 0) {
        let ans = document.getElementsByTagName("h1");
        // console.log(ans[0]);
        ans[1].innerHTML = "mirai school of technology";
    }
    else{
        let ans = document.getElementsByTagName("h1");
        // console.log(ans[0]);
        ans[1].innerHTML = "hello world 2";    
    }
    console.log(i);
    i++;

});

//event listeners
document.getElementById("btn").addEventListener("mouseover", ()=>{
    console.log("hi bye");

});
