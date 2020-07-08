/*
 * Objective: determine if a string is an isogram.

 */


/* solution #1 */

/* Pseudocode:
 *
 * INIT empty array
 *      FOR each letter
 *          IF each letter not in empty array THEN
 *              APPEND to empty array
 *          ELSE 
 *              RETURN false
 *          ENDIF
 *      ENDFOR
 */ 

function isIsogram(str){
    let arr = new Array();
    let ans;
    let strArr = str.toLowerCase().split('');
    strArr.forEach(letter => {arr.includes(letter) ? ans = false : arr.push(letter)});
    return ans === undefined ? true : false;
}

/* solution #2 */ 

function isIsogram2(str) {
    let arr = new Array();
    let strArr = str.toLowerCase().split('');
    for (let i = 0; i <= strArr.length - 1; i++) {
        if (arr.includes(strArr[i]) === false) {
            arr.push(strArr[i]);
        } else {
            return false;
        }
    }
    return true;
}

/* solution #3 - Regular Expressions */



