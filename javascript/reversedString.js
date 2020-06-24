/*
* solution #1
* indexes in reverse and concatenates to dummy string.
*/ 
function reversedStringOne(string) {
    let reversedString = '';
    const stringLen = string.length - 1;
    for (let index = 0; index <= stringLen; index++) {
        reversedString += string[stringLen - index];
    }
    return reversedString;
}
module.exports = reversedStringOne;
/*
* solution #2
* converts string into an array, and performs array methods to get the desired output. 
*/ 
function reversedStringTwo(string) {
    const stringLen = string.length - 1;
    let stringArr = [];
    let index = 0;
    while (index <= stringLen) {
        // evaluating property expression for string as [index] instead of [stringLen - index] => arr.reverse()
        stringArr.push(string[index])
        index++;
    };
    return stringArr;
}



