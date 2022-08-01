/*

Write a function primeFactors that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.

input: number
output: array of numbers
constraints: prime numbers that divides the input param

Iterate up to given number
	If the current element is a prime number and the current element divides the 'number'
		then, push to prime factors list
return the pm list


*/

let isPrime = function(factor) {
    for (let i = 2; i <= factor; i++) {
            if (factor % i == 0) {
                    return false;
            };
    };
    return true;
};

let primeFactors = function(number) {
    let primeFactors = []; // trivial cases
    // iterate from 1 up to input number (ith)
    for (let factor = 2; factor <= number; factor++) {
            if (isPrime(factor) &&  number % factor == 0) {
                    primeFactors.push(factor);
            };
    // if ith is a prime and divides input number, push to return array
    };
    return primeFactors;
};

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
