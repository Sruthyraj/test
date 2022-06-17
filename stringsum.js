array=[];
word1="abc";
word2="qwe";
let l=word1.length+word2.length;
console.log(l);
for(i=0;i<l;i++){
    
        array.push(word1[i]);
  
        array.push(word2[i]);
}

console.log(array.join("").length);