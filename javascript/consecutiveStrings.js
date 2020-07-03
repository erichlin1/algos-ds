/*
 * Objective: 
 * Given an array of strings and integer k. return the first longest 
 * string consisting of k consecutive strings taken in the array.
 * 
 * NOTE: k integer will determine how many consecutive strings to concatenate.
 */

 /* solution #1 
  * pseudocode: 
  * 1. declare array length.
  * 2. conditional statement for cases when k is not satisfactory. 
  * 3. iterate over the array with 'typical' conditions.
  * 4. 
  *
  * 
  */

 function longestConsec(strArr, k) {
     const strArrLen = strArr.length;
     const emptyStr = '';
     if (strArrLen === 0) {
        return emptyStr;
     } else if (k > strArrLen) {
         return emptyStr;
     } else if (k <= 0) {
         return emptyStr;
     } else {

     }
 }