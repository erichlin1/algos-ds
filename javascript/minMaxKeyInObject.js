 /* Problem Statment:
    Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
    The function should return an array with the following format: [lowestKey, highestKey]

*/

let min = function (arr) {
    let minNum = parseInt(arr[0]);
    for (let i = 1; i < arr.length; i++) {
            let currNum = parseInt(arr[i]);
            if (currNum < minNum) {
                    minNum = currNum;
            };
    };
    return minNum;
};

let max = function (arr) {
    let maxNum = parseInt(arr[0]);
    for (let i = 1; i <= arr.length; i++) {
            let currNum = parseInt(arr[i]);
            if (currNum > maxNum) {
                    maxNum = currNum;
            };
    };
    return maxNum;
};


let minMaxKeyInObject = function(obj) {
    let objKeyArr = Object.keys(obj);
    console.log([min(objKeyArr), max(objKeyArr)]);
    return [min(objKeyArr), max(objKeyArr)];
};

// test cases:

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
