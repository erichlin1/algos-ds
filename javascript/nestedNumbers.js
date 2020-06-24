function nestedNumbers(numbers) {
    let newNumbers = [];
    const numbersLen = numbers.length;
    for (let i = 0; i < numbersLen; i++) {
        let tempList = [];
        for (j = 0; j < numbers[i].length; j++) {
            numbers[i][j] % 2 === 0 ? tempList.push('even') : tempList.push('odd');
        };
        newNumbers.push(tempList);
    };
    return newNumbers;
}

module.exports = nestedNumbers;