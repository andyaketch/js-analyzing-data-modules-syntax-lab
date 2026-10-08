const datejs = require('datejs');

  function combineUsers(...args) {
  const combinedObject={
  users:[] ,
  merge_date:[]
   }
 

for (const userArr of args) {
    combinedObject.users = [...combinedObject.users, ...userArr];
  }

//   [
//     ["Alice", "Bob"],
//     ["Charlie"],
//     ["David", "Eve"]
// ]
 
return combinedObject;
  }

const result = combineUsers(["Alice", "Bob"], ["Charlie"], ["David", "Eve"]);
console.log(result);

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
