console.log("start");
setTimeout(function callback(){
    console.log("callback")
},5000);

// -----------------------------------
let button=document.getElementById("btn").addEventListener("click",function event(){
    console.log("button clicked!!")
})

fetch("https://api.netflix.com").then(function promise(){
    console.log("promise!!")
})
console.log("end")