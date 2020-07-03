/*
/*
 * Objective: Given an array of numbers. return the sum of all positive integers.
 */

 /* solution #1 */
function positiveSum(arr) {
    const arrLen = arr.length;
    const posArr = arr.filter(element => element > 0);
    const sumArr = posArr.reduce((sum, element) => sum + element);
    return arrLen === 0 ? 0 : sumArr;
}

/* solution #2 */
function positiveSum2(arr) {
    const arrLen = arr.length;
    let sum = 0;
    if (arrLen === 0) {
        return 0;
    };
    for (let i = 0; i <= arrLen - 1; i++) {
        if (arr[i] > 0 ) {
            sum += arr[i];
        };
    };
    return sum;
}


/* solution #3 - Method: Recursion */

function positiveSum3(array) {
    let arrayLen = array.length;
    let sum = 0;
    (function foo(i) {
        if (i === arrayLen) {
            return;
        } else {
            if (array[i] > 0) {
                sum += array[i];
            };
            foo(i++);
        }
    }(0));
    return sum;
}

/* solution #4 */

function positiveSum4(arr) {
    return arr.reduce((sum, element) => sum + (element > 0 ? element : 0));
}

function test(arr) {
    let sum = arr.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            accumulator + currentValue;
        };
    });
    return sum;
}
console.log(test([1,2,3])); // undefined - why? reduce is traverses every element. weird behaviors occur when it doesn't traverse all elements.
