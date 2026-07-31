console.log("Before promise");

setTimeout(()=>{
    console.log("Inside setTimeout");
},1000);

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved");
    },1000);
});
p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});



console.log("after promise");














// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 resolved");
//     },2000);
// });

// Promise.all([p1,p2]).then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// }); 