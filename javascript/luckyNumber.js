/*

Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and 
returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.

*/

// not considering non-unique values
let luckyNumbers = function(matrix) {
    let luckyNumber;
    let matrixLen = matrix.length;
    let indexMinOfVal;
    let minVal;
    for (let i = 0 ; i < matrixLen; i++) {
        // index of smallest value
        indexMinOfVal = matrix[i].indexOf(Math.min(matrix[i])); 
        // smallest value of curr row;
        minVal = Math.min(matrix[i]); 
        if (i > 0) {

        } else {


        };

        
        
        if (luckyNumber == undefined) {
            
        } else {
            luck
        };
    };




    return luckyNumbers;
};


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]];

console.log(luckyNumbers(matrix)); // [12]

/*
1. find minimum value of the current row. 
2. Check if that value is the maximum value in the col. 

*/
