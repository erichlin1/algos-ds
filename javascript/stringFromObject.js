/* Problem Statement

Write a function called stringFromObject that generates a string from an object's key/value pairs.
The format should be "key = value, key = value". Each key/value pair should be separated by a comma and space except for the last pair.

*/

let stringFromObject = function(obj) {
    let string = '';
    let count = Object.keys(obj).length - 1;
    for (let key in obj) {
            if (count == 0) {
                    string = string + key + ' = ' + obj[key];
                    return string;
            };
            string = string + key + ' = ' + obj[key] + ', ';
            count--;
    };
    if (count == -1) {
            return "";
    };
};

// test cases:

stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"

stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"

stringFromObject({}); // ""
