require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: new Date().toString("M/d/yyyy")
  };

  for (const userArr of args) {
    combinedObject.users = [...combinedObject.users, ...userArr];
  }

  return combinedObject;
}

// const result = combineUsers(["Onyango Tate", "Bob"], ["Ndanu"], ["David", "Eve"]);
// console.log(result);

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};