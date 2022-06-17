check=[];
i=0;

s="babad"
let start=0;

while(s.length>0){
check.push(s[i]);
if(check==check.reverse()){
    start=check[0];
   
    if(check.length>long){
        long=check;
    }
    continue;
    
}
else{
    i=start+1;

}
i++
}
console.log(long)