let arr=[23,45,23,45,67,89,90,12,34,56,78,90];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(arr[i]);
// }

arr.forEach((value,index,arr)=>{
    // console.log(value,index,arr);
    console.log(value*2);
});