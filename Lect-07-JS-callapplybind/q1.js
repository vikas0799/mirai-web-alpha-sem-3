let parth={
    name:"parth",
//     display:function(){
//         console.log(this.name);
//     }
// }
}

let dipesh={
    name:"dipesh",
    display:function (){
        console.log(this.name);
    }
    // display: ()=>{
    //     console.log("bye..");
    //     console.log(this);
    // }
}

console.log("hi")

// dipesh.display();
dipesh.display.call(parth);