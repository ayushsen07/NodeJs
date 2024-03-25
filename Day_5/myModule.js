/**
 * wants to make a module by the me
 */

let add =(a,b)=>{
    return a+b
}

let prod= (a,b)=>{
    return a*b
}

/**
 * this is the normal file 
 * if we wants to make it write a line 
 */

  
//module.exports = add        // this for only access one function 

// if i want to get multiple function so not access more than one so we use object than use all attributes of object
 module.exports= {
    add : add,
    prod : prod
 }

 /**
  * direct way to export the function without the object 
  * 
  * 1=> write direct exports.(fun name anything jo bhi ho)
  * this is the sort way and also export more than one function to this method
  */