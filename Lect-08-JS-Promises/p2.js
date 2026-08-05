

const promise = new Promise((resolve, reject) => {

    let success = false;
    let httpobject = {
        name: "vikas",
        age: 23
    }
    resolve("complted stage 1");
})

promise
    .then(result => {
        console.log(result); // 'First task completed'
        // return delay(1000).then(() => 'Second task completed'); // Return a second Promise
      setTimeout(() => {
           resolve("second task completed..")
      }, 1000);
    })
    .then(result => {
        console.log(result); // 'Second task completed'
    })
    .catch(error => {
        console.error(error); // If any Promise is rejected, catch the error
    });