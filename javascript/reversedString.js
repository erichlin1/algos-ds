/*
* solution #1
*
*/ 

function reversedString(string) {
    let reversedString = '';
    const stringLen = string.length - 1;
    for (let index = 0; index <= stringLen; index++) {
        reversedString += string[stringLen - index];
    }
    return reversedString;
}
module.exports = reversedString;




