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




