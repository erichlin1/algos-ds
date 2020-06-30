/*
 * Objective: Given a string of length x, return a string that represents
 * the ratio of characters not in the following interval [a,m] and length
 * of the string. 
 * 
 * NOTE: all charaters in the string are lowercase.
 */

 /* solution #1 */

 /*
  * pseudocode:
  * Create an array from the string.
  * declare the array length.
  * iterate over the array.
  * declare count and instantiate count to 0.
  * if any element in the array satisfies this condition: element > 'm' then increment count by 1
  * return template literal of ratio of count and array length.
  */

function printerError(string) {
    const stringArr = string.split('');
    const arrLen = stringArr.length;
    let numErrors = 0;
    for (let i = 0; i <= arrLen - 1; i++) {
        if (stringArr[i] > 'm') {
            numErrors++;
        };
    };
    return `${numErrors}/${arrLen}`;
    
}

/* solution #2 */

function printerError2(string) {
    const stringArr = string.split('');
    const arrLen = stringArr.length;
    let numErrors = 0;
    // traverses through stringArr, increment numError by 1 if charater is less than 'm'.
    // Refer to ASCII Chart.
    stringArr.map(character => {
        if (character <= 'm') {
            numErrors++;
        }
    })
    return `${numErrors}/${arrLen}`;
}

/* solution #3 */

function printerError3(string) {
    const stringArr = string.split('');
    // Refer to ASCI Chart
    let numError = stringArr.filter(character => character > 'm');
    return `${numError.length}/${stringArr.length}`;
}

/* solution #4 - Regular Expression */
