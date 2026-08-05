// let x= new  Promise((resolve,reject)=>{
//     resolve("party completed..");
// });

// console.log(x);
// console.log(typeof x);

const x = new Promise((resolve, reject) => {

    let success = false;
    let httpobject={
        name:"vikas",
        age:23
    }

    if(success){
        // resolve("Data fetched successfully");
        resolve(httpobject)
    }else{
        reject("Something went wrong");
    }

});

x.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("thank you for banking..")
})