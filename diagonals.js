
var mat=[[1,2,3],[4,5,6],[7,8,9]];
let sum =0
    for(i=0;i<mat.length;i++){
        for(j=0;j<mat.legth;j++){
            if(i==j) {
                // console.log(mat[i,j])
                sum+=mat[i,j];
        
            }
        }
    }
    console.log(sum);