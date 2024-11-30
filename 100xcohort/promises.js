const fs = require("fs")



function read(){

   return new Promise(readThefile)

}

/*
new Promise((resolve, reject) => {
   // resolve becomes sendTheFinalvaluehere
   // => function becomes  executor functio, in this case readThefile function is executor function in this code example
   // This executor function receives two built-in functions as  parameters: 
    (resolve, reject) - these are provided by the Promise constructor.
})
*/

function readThefile(sendTheFinalvaluehere){
   fs.readFile("a.txt","utf-8",function(err,data){
      sendTheFinalvaluehere(data)
   })

}


const p = read();

function callback(contents){
   console.log(contents)
}

p.then(callback)

/*
--->promise contains a function as argument.

--->Then this function contains 2 arguments (resolve, reject) they are functions too.

--->resolve is a function that does some work (in this case its reading the file) and returns the final value (contents of file) to the callback when called using ".then()" using the instance/object "p" of the promise 

--->resolve is a function that:
    - Is used to successfully complete the Promise
    - Passes the final value (in this case, file contents) 
    - Triggers the .then() callback when called
    - If not called, the Promise remains in a pending state
*/