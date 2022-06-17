//let and const are block scope and var is global scope

{
    let a=1; 
    const b=9;
    var c=5;
    // let a re declaration is not possible
}
// console.log(c)//will print c,
// console.log(b)
// console.log(a)//reference error a is not defined
//----------------
function shadowing(){
    let num1=90;
    // let num2=800;
    if(true){
        let num1=20;
        // var num2=900;illegal shadowing

        console.log(num1)
    }
    console.log(num1)
}
shadowing();


//-----------------
//hoisting



