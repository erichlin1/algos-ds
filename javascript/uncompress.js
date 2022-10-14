/*

Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

You may assume that the number of times will always be an integer between 0 and 9.

*/

// Method #1 - O(n^2)
let uncompress1 = function (str) {
    let uncompressed = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let count = str[i+ 1];
        for (let j = 0; j <= count; j++) {
            uncompressed += char;
        };
    };
    return uncompressed;
};
// Method #2 - O(n)? 

let isolator = function(word) {
    let ans = '';
    for (let i = 0; i < word.length; i += 2) {
        let ele = word[i];
        ans += ele;
    };
    return ans;
};
let recursed = function(len) {
    let ans;
    // base case
    if (len == 0) {
        return ans;
    } else {
        for (let i = 0; i < count[i]; i++) {

        };
        return(len - 1);
  
    };
};

let main = function(str) {
    let uncompressed = '';
    let letters = isolator(str);
    let count = isolator(str.slice(1));
    return recursed(count.length);
};


// test cases

console.log(uncompress('y4x3z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'