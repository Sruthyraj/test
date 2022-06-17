var countOdds = function(low, high) {
    var array=[];
    let count=0;
    for(i=low;i<=high;i++){
        if(i%2 !=0){
            array.push(i);
            
        }
    }
    for(j of array) {
        count+=1;
    }  
    console.log(count);
};
countOdds(3,9);