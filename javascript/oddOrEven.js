/*
 * Objetive: Given a list of numbers, determine whether the sum of its elements is odd or even.
 *
 */

/* solution #1 */

let oddOrEven = array => {
    if (array.length === 0 || (array[0] === 0 && array.length === 1)) {
        return 'even';
    } else {
        let sum = array.reduce((acc, el) => acc + el);
        return sum % 3 === 0 || sum === 1 ? 'odd' : 'even';
    }
}


