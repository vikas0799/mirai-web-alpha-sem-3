const { setTimeout: delay } = require('node:timers/promises');

const fetchData1 = delay(1000).then(() => 'Data from API 1');
const fetchData2 = delay(2000).then(() => 'Data from API 2');
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("payment completed..");
        reject("aarav fees jama kar de.. b..");
    }, 3000)
});

// Promise.all([fetchData1, fetchData2, p3])
//     .then(results => {
//         console.log(results); // ['Data from API 1', 'Data from API 2']
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


Promise.race([fetchData1, fetchData2, p3])
    .then(results => {
        console.log(results); // ['Data from API 1', 'Data from API 2']
    })
    .catch(error => {
        console.error('Error:', error);
    });