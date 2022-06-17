// non curring

const sum=(a,b,c)=>{
    return a+b+c;
}

const s=(i)=>{
    return (j)=>{
        return (k)=>{
            return i+j+k;
        }
    }
}
console.log(s(6)(9)(0));


function mathoperation(operation){
  return  function (a){
        return function (b){
            if(operation=="sum"){
                return a+b
            }
            else if(operation=="subtract"){
                return a-b;
            }
            else if(operation=="muttiply"){
                return a*b
            }
            else{
                return "Invalid Operation"
            }
            
        }
    }
}
const sumFun=mathoperation("sum");
console.log(sumFun(3)(2)) //advantage of curring


//infinite curring

//sum(1)(2)(3)()

function sumCurry(a){
    return function (b){
        if(b) return (sumCurry(a+b))
        return a;

    }
}
console.log(sumCurry(1)(2)(3)(4)(5)(6)());


