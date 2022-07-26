let threeIncreasing = function(arr) {
    // [1, 2, 4, 5, 2, 7, 8]
    // declare element container and set to 1st value of the array
    let container = arr[0];
    // declare count variable and set to 0
    let count = 0;
    let num;
    let iCount = 0;
    // walk through the array
    for (let i = 1; i < arr.length; i++) {
        num = arr[i];
        // if the current element is 1 more than the previous, add 1
        if (num - container == 1) {
            // add count by 1
            ++count;
        };
        // if no consecutive elements exist, re-set to 0
        if (iCount <= 2) {
            if (count < 2) {
                return true;
            } else {
                iCount = 0;
            };
            iCount++;

        };
        // reassign element container to current element
        container = num;

    };
    // return false
    return false;
};
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
