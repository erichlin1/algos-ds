/*
 * Objective:
 * find the index of the string 'needle' in an array of finite elements.
 * NOTE: What if the needle is not in the haystack? (Refer to solution #3)
 */

/* 
 * solution #1
 *
 * pseudocode:
 * 1. arrow function - template literal with embedded expression (array.indexOf()) 
 */

 const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
 
 /* 
  * solution #2
  *
  * pseudocode:
  * 1. regular function declaration with (1) param - haystack.
  * 2. declare const variable - needle = 'needle' & array length (subtract 1)
  * 3. use for loop with initial position as 0, less than the length of the array, 
  * and increment by 1. 
  * 4. define conditional statement - true if and only if needle is found in the haystack (array).
  * 5. return a string (template literal) if needle is found in the haystack.
  */

  function findNeedle2(haystack) {
     const needle = 'needle';
     const haystackLen = haystack.length - 1;
     for (let i = 0; i <= haystackLen; i++) {
         if (haystack[i] === needle) {
            return `found the needle at position ${i}`;
         }
     }
 }

 /*
  * solution #3
  *
  * pseudocode:
  * 1. define regular function with (1) parameter.
  * 2. return template literal with expression embedded with indexOf() method. 
  */
 
 function findNeedle3(haystack) {
     const needle = 'needle';
     const needlePosition = haystack.indexOf(needle);
     if (needlePosition === -1) {
         return 'needle is not in the haystack!';
     } else {
         return `found the needle at position ${needlePosition}`;
     };
  }

 