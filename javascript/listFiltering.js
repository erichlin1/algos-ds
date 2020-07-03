/*
 * Objective: Create a function that takes a list of non-negative integers
 * and strings and returns a new list with the strings filtered out.
 */

 /* Solution #1 */
 
function filterList(list) {
    const listLen = list.length - 1;
    let filteredListInt = [];
    const string = 'string';
    // Objective is to return a filtered list of integers => filtered list of strings is not needed.
    let filteredListStr = [];
    for (let i = 0; i < listLen; i++) {
        typeof(list[i]) === typeof(string) ? filteredListStr.push(list[i]) : filteredListInt.push(list[i]);
    }
    return filteredListInt;
}
    
 /* Solution #2 */
const filterList2 = (list.filter(data => {
    if (typeof(data) !== typeof('string')) {
        return data;
    }
}));

/*
 * NOTES:
 * iterating & removing using .splice() method re-indexes the array => some indices will not be parsed.
 * Map function is used to map one value to another.
 * even if there exist a logical conditions that filters out some type of data, map function will
 * return a value that's undefined in replace for other data. 
 */
