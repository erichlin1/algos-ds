/*
 * Objective: Write a function which takes a list of strings and 
 * returns each line prepended by the correct number.
 * The numbering starts at 1. The format is n: string.
 * 
 */



/* solution #1 */

/*
 * INIT variable equal to length of array
 * SET empty array
 *      FOR value till length of array
 *          APPEND string literal to empty array 
 *      END FOR
 *
 */
let number = function(array) {
    const arrLen = array.length;
    let numArr = new Array();
    for (let i = 0; i <= arrLen - 1; i++) {
        numArr.push(`${i + 1}: ${array[i]}`);
    }
    return numArr;
}

/* solution #2 */

let number2 = function(array) {
    let numArr = new Array();
    array.forEach((letter, index) => {
        numArr.push(`${index + 1}: ${letter}`);
    });
    return numArr;
}

/* solution #3 */

let number3 = arr => arr.map((letter, index) => `${index + 1}: ${letter}`);



