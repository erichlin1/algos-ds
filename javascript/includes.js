/* problem statement

Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.

The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

*/

/* rephrased: return true (return false otherwise) if the value parameter is included in the collection of items based on these two conditions:
1. If the collection is a string or an array, then use the index as the starting index.
2. if the collection is an object, then do not use the index (since object is unordered).

*/


let includes = function(collection, value, index) {
    if (typeof(collection) == 'object') {
        for (let element in collection) {
                if (value == collection[element]) {
                        return true;
        };
        return false;
    }
    if (typeof(collection) == 'array' || typeof(collection) == 'string') {
        for (; index < collection.length ; index++) {
                    if (value == collection[index]) {
                            return true;
                    };
            };
        return false;
    };
};
};

// test cases:

console.log(includes([1, 2, 3], 1) == true);
console.log(includes({ 'a': 1, 'b': 2 }, 1) == true);
console.log(includes('abcd', 'a', 2) == false);
