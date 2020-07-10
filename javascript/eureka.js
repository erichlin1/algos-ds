/*
 * Objective: We need a function to collect these numbers, 
 * that may receive two integers a, b that defines the range 
 * [a, b] (inclusive) and outputs a list of the sorted numbers 
 * in the range that fulfills the behavior below:
 *
 * 89 = 8^1 + 9^2
 * 135 = 1^1 + 3^2 + 5^3
 */

 /* solution #1 */

 /* pseudocode:
  *
  * SET sum array
  * FOR each integer in the range [a,b]
  *     SET integer to a string
  *     SET variable array = sub string of integers (split method)
  *     SET variable length array
  *     SET variable sum
  *     FOR each string integer array
  *         INCREMENT by sum raised to the index
  *     END FOR
  */

let Eureka = (a,b) => {
    let sumArr = new Array();
    for (let i = a; i <= b; i++) {
        iArr = String(i).split('');
        iArrLen = iArr.length;
        let sum = 0;
        for (j = 0; j <= iArrLen - 1; j++) {
            sum += Number(iArr[j]) ** (j + 1);
        };
        if (sum === i) {
            sumArr.push(sum)
        };
    }
    return sumArr;
}
console.log(Eureka(1, 2646799));