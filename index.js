
  function combineUsers(...args) {
  const combinedObject={
  users:[] 
   }
 

for (const userArr of args) {
    combinedObject.users = [...combinedObject.users, ...userArr];
  }
 
  const merge_date={
    []
  }
return combinedObject;
  }

const result = combineUsers(["Alice", "Bob"], ["Charlie"], ["David", "Eve"]);
console.log(result);

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
