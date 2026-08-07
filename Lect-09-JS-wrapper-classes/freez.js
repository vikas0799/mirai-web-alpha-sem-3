"use strict";

const user = {
  name: "Alice",
  age: 30
};

// Freezing the object
Object.freeze(user);

// Checking if it is frozen
console.log(Object.isFrozen(user)); // true

// Attempting to modify (Throws TypeError in strict mode)
user.age = 31; // Error: Cannot assign to read only property 'age'
user.role = "Admin"; // Error: Cannot add property role, object is not extensible
delete user.name; // Error: Cannot delete property 'name'
