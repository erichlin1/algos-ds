/*

Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.

*/

function maxColumn(matrix) {
    let maxCol = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (maxCol[j] < matrix[i][j]) {
                maxCol[j] = matrix[i][j];
            };
        };
    };
    return maxCol;
}

// Test Cases

let matrix1 = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

let matrix2 = [[ 1,  0, 0],
          [ 0, 2,  4],
          [100, -1, 5]]
