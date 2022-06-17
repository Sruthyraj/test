var obj={
    name:"sruthy",
    print:(()=>{
        console.log(this.name)
    })
}

var obj1={
    name:"raj"
}

obj.print.call(obj1);