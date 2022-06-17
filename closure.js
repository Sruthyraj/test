 
 
//  function f(){
//     var a=10;
//     function f2(){
//         console.log(a)
//     }
//     return f2
    
//  }
//  const call=f();
//  call();
//--------------------------
//  for(var i=0;i<3;i++){
//     function print(i){
//         setTimeout(function (){
//             console.log(i)
//         },i*1000)
 
//     }
//     print(i);
//  }
//-------------

 for(let i=0;i<3;i++){
    setTimeout(function f(){
        console.log(i)
    },i*1000)
 }

 //--------

 let view="save the name as Sruthy";
 function f(){
    let count=0;
    return function (){
        if (count>0){
            console.log("Name already exist!!")
        }
        else{
            console.log(view);
            count++
        }
    }
 }
 const main=f();
 main();
 main();
 
