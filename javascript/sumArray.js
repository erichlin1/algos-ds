// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'
let nonVowel = function(word) {
    let dummy = '';
    let vowels = 'AEIOUaeiou';
    for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (vowels.includes(char) == false) {
                dummy += char;  
            } else {
                return word.slice(i) + dummy + 'ay';
            };
        };
    
};
console.log(nonVowel('trash'));

function pigLatinWord(word) {
    let vowels = 'AEIOUaeiou';
    if (word.includes(word[0])) {
        return word.concat('yay');
    } else {
        return nonVowel(word);
    };
  
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"