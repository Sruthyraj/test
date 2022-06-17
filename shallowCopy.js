var a={1:"rfg",2:"rwgg",3:"ft"};
// var c={...a}
// var c=Object.assign({},a)
// var c=JSON.parse(JSON.stringify(a))  all deep copy
var b=a; //shallow copy
a[1]="aaa";
console.log(a)
console.log(b)
console.log(c)
