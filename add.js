var a=1+"2";
console.log(a);
console.log(typeof(a))
arr1=[1,2,3,9];
arr2=[7,8,9];
// arr1 =[...arr1,...arr2]
console.log(arr1.push(10));
arr1 =[...arr1,...arr2]
console.log(arr1,arr2)


console.log(sum(...arr1))
function sum(x,y,z){
    return  x+y+z
}



num1=[1,2,3];
num2=num1;
num2.push(9);
console.log(num1,num2);
num3=[3,4,5];
num4=[...num3];
num3.push(90);
console.log(num3,num4)
//-------------------

a={o:0,i:9};
b=a;
console.log(a==b);
b={o:0,i:9};
a=[1,2,3];
b=a;
console.log(a==b);

