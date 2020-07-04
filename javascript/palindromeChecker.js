/*
 * Objective: Return true if the given string is a palindrome. Otherwise, return false.
 */

/* solution #1 */

const palindrome = str => {
    const strArr = str => str.toLowerCase().split('');
    const filteredStrArr = strArr(str).filter(char => {
        return char.charCodeAt() >= 96 && char.charCodeAt() <= 122;
    });
    let copyArr = filteredStrArr.join('');
    let mainArr = filteredStrArr.reverse().join('');
    return copyArr === mainArr ? true : false;
};

console.log(palindrome('hannah'));
