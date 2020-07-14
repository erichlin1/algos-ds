/*
 * Objective: write a function that takes an array of integers and a target number.
 * it should find two different items in the array that, when added together, give
 * the target value. The indices of these items should then be returned in a tuple
 * like so. (index1, index2). NOTE: tules do not exist in Javascript. Return an array.
 */

/* solution #1 NOTE: not as efficient. traverses integers twice. */

function twoSum(array, target) {
    const arrLen = array.length;
    for (let i = 0; i <= arrLen - 1; i++) {
        for (let j = 0; j <= arrLen - 1; j++) {
            if (i === j) {
                continue;
            }
            if (target === array[i] + array[j]) {
                return [i, j];
            }
        }
    }
}


/* solution #2 - use hash tables */

/* solution #3 - use another data structure */