/**
 * write a text file by js file synchronusly 
 
const fs = require('fs')
console.log('BEFORE')
fs.writeFileSync('output.txt','Hello student')
console.log('after')


*/

/**
 * write a  txt file by js file asynchronusly 
 * */

const fs = require('fs')
fs.writeFile('output2.txt', 'Hello student agian',(err)=>{
    if(err){
        return console.log("mot write ")
    }
    console.log('write succesfully')
})

console.log('after')