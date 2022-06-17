var a=[4 ,9 ,95 ,93, 57, 4 ,57 ,93, 9];
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
   
   for (var i in obj){
       array1.push([i,obj[i]]);
       
   }
   array1.sort((a,b) =>a[1]-b[1]);
   console.log(array1[0][0]);