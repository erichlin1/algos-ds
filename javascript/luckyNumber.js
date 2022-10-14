/*

Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and 
returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.

*/

/* Goal is to acheive 0(n) runtime

Case #1 - when length of the matrix is longer than width
Case #2 - when width is longer
Case #3 - both have the same dimensions

*/


// assuming that the length of row is the longest;
let rowLongest = function(array) {
    let smallestValue;
    

    return smallestValue;
};

// assuming that col. length is the longest;
let colLongest = function(array) {
    let smallestValue = Number.POSITIVE_INFINITY;
    let indexOfSmallestValue;
    let stop = array.length; 
    let rowLen = array[0].length;
    let counter = 0;
    for (let i = 0; i < stop; i++) {
        let currRow = array[i];
        let currEle = currRow[counter];
        console.log(currRow, currEle);
        if (currEle < smallestValue) {
            smallestValue = currEle;
            indexOfSmallestValue = counter;
        };

        if (counter == rowLen) {
            continue;
        };
        counter ++;
    };
    return smallestValue;

};

let main = function(array) {
    let LargestColValue = colLongest(array).smallestValue;
    console.log(LargestColValue);
    let colIndex = colLongest(array).index;
    for (let j = 0; j < array.length; j++) {
        let currEle = array[j][colIndex];
        if (LargestColValue < currEle) {
            largestColValue = currEle;
        };
    };

};

// test cases:


let matrix = [[10, 10,  8,  6],
          [10,  2,  1,  9],
          [21, 15, 9, 10]]



console.log(colLongest(matrix));
