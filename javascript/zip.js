/*

Write a function zip that accepts two arrays as arguments. The function should return a two dimensional 
array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. 
You may assume that the input arrays have the same length.


*/

let zanyZip = function(arr1, arr2) {
    let ans = [];
    let longestArr;
    let shortestArr;
    if (arr1 < arr2) {
        longestArr = arr2;
        shortestArr = arr1;
    };
    for (let i = 0; i < longestArr.length; i++) {
        if (shortestArr[i] == undefined) {
            ans.push([null, longestArr[i]]);
        } else {
            ans.push([shortestArr[i], longestArr[i]]);
        };
    };
    return ans;
};


// test cases

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]