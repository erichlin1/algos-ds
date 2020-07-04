/*
 * Objective: Return true if the given string is a palindrome. Otherwise, return false.
 */

/* solution #1 */

const palindrome = str => {
    const strArr = str => str.toLowerCase().split('');
    const filteredStrArr = strArr(str).filter(char => {
        let decChar = char.charCodeAt();
        return ((decChar >= 96 && decChar <= 122) || (decChar >= 48 && decChar <= 57));
    });
    console.log(filteredStrArr);
    let copyArr = filteredStrArr.join('');
    let mainArr = filteredStrArr.reverse().join('');
    return copyArr === mainArr ? true : false;
};
