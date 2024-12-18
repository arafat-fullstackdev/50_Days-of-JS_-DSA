//* find min and max from array
//Given an array of size N. The task is to find the maximum and the minimum element
//  of the array using the minimum number of comparisons.
//? step 1
function minSet(A){
    let min = Infinity;
    for(let  i = 0; i< A.length; i++){
        if(A[i] <min){
            min = A[i];
        }
    }
    return min;
}

function maxSet(A){
    let min = -Infinity;
    for(let  i = 0; i< A.length; i++){
        if(A[i]> min){
            min = A[i];
        }
    }
    return min;
}

function main(){
    const A = [1,2,3,45,665,7,8];
    console.log('Min element is:', minSet(A));
    console.log('Max element is:', maxSet(A));
}

main();