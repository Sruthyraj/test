

function display(sum){
    console.log(`The sum is ${sum(5)}`)
}

function add( num){ //parameters
    return num;
}

display(add);//aruments

//Imediatly invoked function expresion iife
//example

(function f (x){
    return (function (y){
        console.log(x)
    })(3)

})(2)

//---------

for(var i=0;i<5;i++){
 setTimeout(function () {
        console.log(i)
    },i*1000)
}

// spread and rest operators

function array([...a]){//rest operators
    console.log(a);
    console.log(a[0],a[1])
}

var a=[2,3]
array([...a])//spred operator


function print(z,x,c,v,...b){ //rest operator should be last paametr
    console.log(z,x,c,v,b)
}
print(1,2,3,6,5,4,7,888,776,544) //b will be [4,7,888,776,544]


