/*
 * Objective: to find out which one of the given numbers differs from the others.
 *
 */


 /* solution #1 */



function iqTest(/* str of ints */numbers) {
    let evenNumArr = [];
    let oddNumArr = [];
    let arr = numbers.split(' ');
    let numbersLen = numbers.length;
    for (let i = 0; i <= numbersLen - 1; i++) {
        let num = Number(arr[i]);
        num % 2 === true ? evenNumArr.push(num) : oddNumArr.push(num);
    }
    console.log(evenNumArr);
    console.log(oddNumArr);
}
iqTest('2 7 2 2')