/* Problem Statement

Calculate the absolute value of the difference between the sum of the diagonal values in a square matrix.

*/

function diagonalDifference(arr) {
    let leftStartSum = 0;
    let rightStartSum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
                if (i == j) {
                    leftStartSum = leftStartSum + arr[i][i];
										// reversed sub-array to access [i][j] index value
										rigthStartSum = rightStartSum + arr[i].reverse()[i];
                };
        };
    };
    // absolute value
    return Math.abs(leftStartSum - rightStartSum);
};
