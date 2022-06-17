var promise=new Promise(function (resolve,reject){
    const a=10;
    const b=9;
    if(a==b){
        resolve();
    }
    else(reject());
});

promise.then(function(){
    console.log("equal")
})
promise.catch(function(){
    console.log("unequal")
})

//----------------------------
var promise2=new Promise(function(resolve,reject){
    resolve("Resolved");
    reject("reject")
})
// promise2.then(function(msg){
//     console.log(msg)
// })
promise2.catch(function(msg){
    console.log(msg)
})

//-----------Async/ await--------//

const getData=async() =>{
    var msg="hello";
    console.log(msg)

}
