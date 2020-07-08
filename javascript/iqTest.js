/*
 * Objective: to find out which one of the given numbers differs from the others.
 *
 */

 /* solution #1 */
 
 function iqTest1(/* str of ints */numbers) {
    let evenNumArr = [];
    let oddNumArr = [];
    const arr = numbers.split(' ');
    arr.forEach(strInt => {
        let num = Number(strInt);
        num % 2 === 0 ? evenNumArr.push(num) : oddNumArr.push(num);
    });
    const firstOddVal = arr.indexOf(String(oddNumArr[0])) + 1;
    const firstEvenVal = arr.indexOf(String(evenNumArr[0])) + 1;
    return evenNumArr.length !== 1 ? firstOddVal : firstEvenVal;
}



 /* solution #2 */

function iqTest2(/* str of ints */numbers) {
    let evenNumArr = [];
    let oddNumArr = [];
    let arr = numbers.split(' ');
    let arrLen = arr.length;
    for (let i = 0; i <= arrLen - 1; i++) {
        let num = Number(arr[i]);
        num % 2 === 0 ? evenNumArr.push(num) : oddNumArr.push(num);
    }
    return evenNumArr.length !== 1 ? oddNumArr[0] : evenNumArr[0];
    
}
