const fs = require('fs')
 console.log(typeof fs) //=>  object

console.log(" strat from the first")

const content = fs.readFileSync('inputtext.txt')
console.log("output is : " +content)

console.log("last line ")