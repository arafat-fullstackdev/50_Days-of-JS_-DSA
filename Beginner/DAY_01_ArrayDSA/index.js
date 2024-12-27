//* Array Sorted
function squareArray(array){
    let newArray = new Array(array.length).fill(0);
    for(let i =0; i <array.length; i++){
        newArray[i] = array[i] * array[i]; // Square each element
    }
    newArray.sort((a, b) => a - b);  //Sorting the array of squares number
    return newArray;

}
console.log(squareArray([1,3,4,5,6,7]));