var arr=[2,3,7,1,5,7,5,8,4,88];
console.log(arr.map((x) =>x*2));
console.log(arr.filter(x => x%2==0));
console.log(arr.sort((a,b) => b-a));
console.log(arr.reduce((x,y) =>{
    if(y>x) x=y;
    return x;

},0))

console.log(arr.reduce((s,c)=>
{
    s+=c;
    return s
},0))


/* question*/

var array=[2,3,2,4,61,6,5,8,99,1,1,1];



var output=array.reduce((c,n)=>{
    if(c[n]){
        c[n]+=1;

    }
    else{
        c[n]=1
    }
    return c;


},{})
console.log(output);
for(i in output){
    console.log(i)
}




var arrayobj=[];
for(var i in output){
arrayobj.push([i,output[i]])
}
console.log(arrayobj);
arrayobj.sort((a,b) =>a[1]>b[1]);
console.log(arrayobj);
console.log(arrayobj[0][0],arrayobj[0][1])