/*
 * Objective: Write a function which returns the sum 
 * of following series upto nth term(parameter).
 * 
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 *
 * 1. You need to round the answer to 2 decimal places and return it as String.
 * 2. If the given value is 0 then it should return 0.00
 * 3. You will only be given Natural Numbers as arguments.
 */


/* solution #1 */

function seriesSum(n) {
    let sum = 0;
    let nthDenom = 1;
    if (n === 0) {
        return `${0.00}`;
    } else {
        for (let i = 1; i <= n; i++) {
            sum += (1 / nthDenom);
            nthDenom += 3;
        }
    }
    return `${sum.toFixed(2)}`;
}

/* solution #2 */

function seriesSum2(n) {
    let arrSum = new Array(); 
    let nthDenom = 1;
    for (let i = 1; i <= n; i++) {
        arrSum.push(1 / nthDenom);
        nthDenom += 3;
    }
    let sum  = arrSum.reduce((acc, cur) => acc + cur);
    return n !== 0 ? `${sum.toFixed(2)}` : `${0.00}`;
    
}



