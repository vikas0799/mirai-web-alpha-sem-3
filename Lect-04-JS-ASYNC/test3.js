console.log("A");

setTimeout(() => console.log("B"), 0);


Promise.resolve().then(() => console.log("C"));

queueMicrotask(() => console.log("E"));

setTimeout(() => console.log("F"), 0);


console.log("D");
