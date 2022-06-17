var obj={
    name:"sruthy",
    age:24
}
var newObj=Object.create(obj);
obj["isNew"]=false;
console.log(obj)
console.log(newObj);

function Car(model,color){
    this.model=model,
    this.color=color

}
var newObj1=new Car("bmw","black");
console.log(newObj1);