const fs = require('fs')

fs.readFile('raad.txt', 'utf8',(err,content)=>{
    if(err){
        return console.log('erorr');
    }
    console.log("content of the file is" + content)
})

console.log("last lline")