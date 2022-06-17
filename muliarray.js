accounts=[[1,5],[7,3],[3,5]];
// var com=accounts[0].reduce((a,b)=> a+b);
// console.log(accounts[0])
// for(i of accounts){
    
//     let max=i.reduce((a,b)=> a+b);
//     if(max>com){
//         com=max
//     }
   
// }
max=0;
for(i in accounts){
let total=accounts[i].reduce((a,b)=>a+b);
max=Math.max(max,total);
}
console.log(max);
