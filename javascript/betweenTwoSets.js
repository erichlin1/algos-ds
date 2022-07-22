/* Problem Statement: Determine all integers such that every element in
array a is a factor and the considered integers are all factors of every element in
array b.

input: two integer arrays
output: the number of integers that satisfy the conditions
conditions: problem statement

*/

let getTotalX = function(a, b) {
    let numbersBetweenTheArrays = [];
    let countA = 0;
    let countB = 0;
    for (let i = 1; i <= 20; i++) {

        for (let numA of a) {
            // condition #1
            if (i % numA == 0) {
                countA++;
            };
        };
        if (countA == a.length) {
            // conditiond #2
            for (let numB of b) {
                if (numB % i == 0) {
                    countB++;
                };
            };
            if (countB == b.length) {
                numbersBetweenTheArrays.push(i);
            };
            countB = 0;
        };
        countA = 0;
    };
    return numbersBetweenTheArrays.length;
};

// test cases

console.log(getTotalX([2,6],[24,36]));
