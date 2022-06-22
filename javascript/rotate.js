/* Problem Statement

Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

input: 2 parameters (array and number)
output: altered array with 2nd param as the number of rotated spaces
conditions:


*/

let rotate = function(array, num) {
    let rotated = new Array(array.length);
    let j = 0;
    let k = 0;
    for (let i = 0; i < rotated.length; i++) {
            j = i + num;
            if (j <= rotated.length - 1) {
                rotated[j] = array[i];
            } else {
                rotated[k] = array[i];
                k++;
            };
    };
};


// Test Cases

rotate([1,2,3], 1)
rotate([1,2,3], 2)
rotate([1,2,3], 3)
rotate([1,2,3,6], 2)
rotate([3,2,3,1,3,6], 3)
rotate([1,2,3,5,6,7,2], 5)
