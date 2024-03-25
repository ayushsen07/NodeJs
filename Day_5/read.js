/**
 * read from an external file 
 */

const fs = require('fs')
 console.log(typeof fs) //=>  object

console.log(" strat from the first")

const content = fs.readFileSync('C:/Users/hp/Desktop/Mern/BE/learn_Node.js/Day_5/inputtext.txt')
console.log("output is : " +content)

console.log("last line ")