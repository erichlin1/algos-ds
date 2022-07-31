// Write a function laligatSum(n) that takes in a number and returns the laligatSum of that number. A number's laligat sum is the the sum of all the prime numbers less than or equal to that number.

/*
input: integer numbers
output: integer sum
constraints: all prime numbers less than or equal to that number

helper functions:
1. returns a boolean indicating if a value is a prime number
2. returns sum of an array

*/
// sums the list of prime numbers
let sumOfArray = function(arr) {
    let sum = 0;
    for (let num of arr) {
            sum += num;
    };
    return sum;
};
// returns a list of prime numbers that are less than n
let laligatSum = function(n) {
    let primes = [1];
    // iterate from one to n (ith term)
    for (let i = 2; i <= n; i++) {
            // iterate again, but up to current integer (jth term, assigned to the outer-loop)
            for (let j = 2; j <= i; j++) {
                    // if the only divisor of the ith term is 1 and jth (current ith) integer then append to primes.
                    if (i % j == 0 ) {
                            if (i == j) {
                                    primes.push(i);
                            } else {
                                    break;
                            };
                    };
            };
    };
    return sumOfArray(primes);
};
