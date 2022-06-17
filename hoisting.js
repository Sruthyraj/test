
console.log(a)
// console.log(b)


var a=100;
// let b=200;

function abc(){
    console.log(b);
    var b=10;
}
abc();

function f(){
    console.log(num1,num2,num3);
    const num3=10;
    let num2=12;
    var num1=10;
}
f();