var arr1=[1,2,3,4,12];
var arr2=[5,7,2,4,1,1,13];
var arr3=[1,5,9,10,11];

// var array=arr1.concat(arr2).concat(arr3);
var array=[...arr1,...arr2,...arr3]

var output=array.reduce((c,n) =>{
    if(c[n]){
        c[n]+=1
    }
    else{
        c[n]=1
    }
return c;
},{})
console.log(output);
var a=[];
for(i in output){
    a.push([i,output[i]])

}

a.sort((a,b)=>b[1]-a[1])
console.log(a);
var final=[];
for(i of a){
  if(i[1]>1){
      final.push(i)

  }
}
console.log(final);

