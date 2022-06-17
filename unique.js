const arr1=[1,5,9,3,9];
const arr2=[3,4,3,2,1,7];
const arr3=[7,8,2,1];
let array=[...arr1,...arr2,...arr3];
var obj=array.filter((c,v)=>{
    c[v]?c[v]+=1:c[v]=1;
    return c
},{});
let currentArray=[];
for(i in obj){
currentArray.push([i,obj[i]])

}
console.log(currentArray);
for(i of currentArray){
    if(i[1]==1){
        console.log(i)
    }
    
}