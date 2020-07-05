/*
 * Objective: Given a string, detect whether or not it is a pangram. 
 * Return True if it is, False if not. Ignore numbers and punctuation.
 */

/* 
 * solution #1 
 * This solution is extremely verbose. Though it was fun. Tests my
 * basics logic, understanding of javascript, and approaching a TDD mindset.
 */

// returns array of characters.
const doubleStrSplit = (string) => {
    const strLen = string.length;
    let charArr = [];
    for (let i = 0; i <= strLen - 1; i++) {
        let character = string[i];
        if (character.charCodeAt() != 32) {
            charArr.push(character)
        };
    };
    return charArr;
};

// returns a new array with removed repeated characters in array arg.
const removeRepeatChar = (arr) => {
    const lowCharArrLen = arr.length;
    let charArr = [];
    for (let i = 0; i <= lowCharArrLen - 1; i++) {
        let character = arr[i];
        // cond. statement to check if letter is in the target array. if it is, do not append.
        if (charArr.includes(character) === false) {
            charArr.push(character);
        }
    }
    return charArr;
};

// returns integer sum of a - z. Refer to decCharSumFor (solution #2);
const decCharSum = () => {
    const decValue = 'a'.charCodeAt();
    let i = 0;
    let sum = 0;
    let testArr = [];
    while (i < 26) {
        sum += (decValue + i);
        testArr.push(decValue + i);
        i++;
    }
    // 109.
    return Math.floor(sum / 26);
};

// returns a true if string is pangram, and false otherwise.
function isPangram(string) {
    let lowCharArr = doubleStrSplit(string.toLowerCase());
    let removedRepeatChar = removeRepeatChar(lowCharArr);
    const removedRepeatCharLen = removedRepeatChar.length;
    let sumChar = 0;
    for (let i = 0; i <= removedRepeatCharLen - 1; i++) {
        sumChar += removedRepeatChar[i].charCodeAt();
    }
    const charSum = Math.floor(sumChar / 26)
    return charSum  === decCharSum() ? true : false;
}

