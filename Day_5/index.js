/**
 * bring the module logic in the my file
 */

const add= require("./myModule")
//console.log(add)

//console.log(add(3,4))


// for bring the object module 
const operation = require("./myModule")

console.log(typeof operation)
console.log(operation.add(5,4))
console.log(operation.prod(5,4))