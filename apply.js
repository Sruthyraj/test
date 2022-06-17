var a={
   name:"sruthy",
   print:function(){
    console.log("My name is "+this.name +"  age is" +this.age)
   }
}


var f={
    name:"vimal",
    age:56
}

console.log(a.print.call(f))

var a1={
    n:"sruthy",
    print1:function(n,age1){
     console.log("My name is "+this.n +"  age is" +this.age1)
    }
 }
 
 
 var f1={
     n:"vimal",
    //  age:56
 }
 console.log(a1.print1.apply(f1,["34"]))
