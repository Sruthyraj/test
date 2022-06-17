var funtn=(function (a){
    delete a;
    return a
})(5);
console.log(funtn)//output will be 5,because delete operation works only with object not with a local variable

var obj={
    a:"sruthy",
    b:"raj",
    "is employed":true
}
const {a:FirstName}=obj;
console.log(FirstName);
console.log(obj["is employed"]);
const Age="age";
obj[Age]=4;
console.log(obj);

//  localStorage.setItem("obj",obj); it will not store

localStorage.setItem("obj",JSON.stringify(obj));

console.log([..."myname"]);

var circle={
    radius:10,
    diameter(){
        return 2*this.radius;
    },
    perimeter:()=> 2*Math.PI*this.radius

}
console.log(circle.diameter())
console.log(circle.perimeter())






























