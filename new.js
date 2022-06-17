n=50;
var str=n.toString(2);
var n=str.length;
var i;
var ones="";
for(i=0;i<n;i++){
    ones+=flip(str[i])
}
function flip(c){
    return (c=="0")?"1":"0";
}
console.log(str)
console.log(ones);


full="Start from the Least Significant Bit and traverse left until you find a 1";
sub ="Least Significant Bit and traverse";
var fullstr=full.split(" ");
var substr=sub.split(" ");
var missing=fullstr.filter(x => !substr.includes(x));
for(i of missing){
    console.log(i+"\n");
}


//String
var input="2 Hacker rancker";
strCopy = input.split("\n").slice(1);
console.log(strCopy);

var even="";
var odd="";
console.log(input.length)
    for(var i=0;i<input.length;i++){
        if(i%2==0){
            even+=input[i];
        }
        else if(i%2 != 0){
             odd+=input[i];
        }
    }
    console.log(even+" "+odd);


