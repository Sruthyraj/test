var array="2 efrg rwr";

console.log(array.split(" ").slice(1));
console.log(array.split(" ").splice(1,1));

var a=[1,9,2,7,7,7,3];
var array1=[];
  var obj= a.reduce((c,n)=>{
       if(c[n]){
           c[n]+=1;
       }
       else{
           c[n]=1;
       }
       return c;
       
   },{});
   console.log(obj)
   for (var i in obj){
    console.log(i,obj[i])
       array1.push([i,obj[i]]);
       
   }
   
   array1.sort((a,b) =>a[1]-b[1]);
   console.log(array1[0][0]);