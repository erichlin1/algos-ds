/*
 * Objective: Write a program that finds the summation of 
 * every number from 1 to num. The number will always be 
 * a positive integer greater than 0.
 * 
 * 
 */

 /* Solution #1 Time: 1122ms */

 function grasshopperSum(num) {
     let sum = 0;
     for (let i = 0; i <= num; i++) {
         sum += i;
        }
        return sum;
    }

 /* Solution #2 Time: 1108ms*/

 const grasshopperSum2 = (num) => num * (num + 1) / 2;
 console.log(grasshopperSum2(4));



