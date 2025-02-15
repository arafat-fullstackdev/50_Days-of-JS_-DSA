//* Array Sorted
//  You are given an array of integers in which each subsequent
//  element is not less than the previous value. Write a function
//   takes this array as an input and returns a new array with the
//  squares of each number sorted in ascending order.

function squareArray(array){
    let newArray = new Array(array.length).fill(0);
    for(let i =0; i <array.length; i++){
        newArray[i] = array[i] * array[i]; // Square each element
    }
    newArray.sort((a, b) => a - b);  //Sorting the array of squares number
    return newArray;

}
console.log(squareArray([1,3,4,5,6,7]));