/*
 * Objective: Complete the square sum function so that it squares
 * each number passed into it and then sums the results together.
 * Example: 
 * for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

 /* solution #1 */
 
function squareSum(numbers) {
    const numbersLen = numbers.length;
    let solution = 0;
    for (let i = 0; i < numbersLen; i++) {
        solution += numbers[i] ** 2;
    };
    return solution;
}

// NOTE: param1 for reduce method is the callback function, param2 is the initial value