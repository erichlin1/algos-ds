'use strict';
/*
 * Objective: Given an integer array nums, find the contiguous subarray 
 * within an array (containing at least one number) which has the largest product.
 */


 /* 
  * solution #1 
  * pseudocode:
  * 1. declare arr length.
  * 1. declare empty array.
  * 2. iterate arry with 'typical conditions': index = 0, index 
  * ... is than arr length - 1, increment by 1 to traverse through all elements.
  * 3. reference 1st and 2nd index and compare 3rd and 4th.
  * 4. if the product of 1st and 2nd element is greater than the product
  * ... of the 3rd and 4th, then re-declre the empty array.
  * 5. return populated'empty array'.
  * 
  */

  let maxProduct = function(nums) {
      const numsLen = nums.length - 1;
      let adjSubArr;
      for (let i = 0; i < numsLen; i++) {
          console.log(`index: ${i}, index+3; ${nums[i + 3]}, array length:${nums.length}`)
          if ((nums[i] * nums[i + 1]) > (nums[i + 1] * nums[i + 2])) {
              adjSubArr = [nums[i], nums[i + 1]];
          }
      }
      return adjSubArr
  }
  console.log(maxProduct([2,3,-2,4,2,1,2,5,3,2,10,20,2,40,70, 400,100,2]));