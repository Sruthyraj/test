var person=[{   prise:100,name:"sruthy",age:"24"},
{   prise:200,name:"raj",age:"24"},
{   prise:200,name:"m",age:"24"}

]


//--------Oject to array
var array=[];
for(i of person){
    array.push(Object.entries(i)
        )

}
const sum=array.reduce((s,n)=>{
    s+=n[0][1];
    return s

},0)
console.log(sum)

 

        
    

