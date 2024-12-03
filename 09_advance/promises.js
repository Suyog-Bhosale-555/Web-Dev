const promiseOne= new Promise(function(resolve, reject){
    //does async task
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log('Async task complete');
        resolve();
    },3000)
})

promiseOne.then(function(){
    console.log('Promise one resolved');
})
//--------------------------------------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 ")
        resolve()
    },5000)
}).then(function(){
    console.log("Async 2 resolved")
})
//--------------------------------------------------------
const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username:"Akash", email:"akash@test.com"})
    },8000)
})

promiseThree.then(function(user){
    console.log(user)
})
//--------------------------------------------------------\
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"sam", password:"123"})
        }else{
            reject('ERROR: Sommething went wrong')
        }
    },10000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(() => console.log("The promise is either resolved or rejected"))
//-----------------------------------------------------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 12000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
//---------------------------------------------------------
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()
//---------------------------------------------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.