/* problem statement: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

input: an array of integer
output: console log a long integer such that the smallest value precedes the largest value (separated by a single space)
conditions: -
Questions: -

*/

// Method #1 - Time Complexity: O(n^2)

let minMaxSum1 = function () {
    let sums = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j != i) {
            sum = arr[j] + sum;
            };
        };
        sums.push(sum);
        sum = 0;
    };
    let min = Math.min(...sums);
    let max = Math.max(...sums);
    console.log(`${min} ${max}`);
};

// Method #2 - Time Complexity: O(n) (incomplete)
// skips first indexed value after first iteration when i is set to 0

function minMaxSum(arr) {
    let sums = [];
    let sum = 0;
    let j = 0;
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i != j) {
            console.log(arr[i]);
            sum = arr[i] + sum;
        };
        if (i == arr.length - 1) {
            console.log('-');
            i = k;
            sums.push(sum);
            sum = 0;
            if (j == arr.length - 1) {
                return;
            };
            j++;
        };
    };
};
