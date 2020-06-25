/*
 * Objective: Create a function that takes a list of non-negative integers
 * and strings and returns a new list with the strings filtered out.
 */

 /* Solution #1 */
 
function filterList(list) {
    const listLen = list.length - 1;
    let filteredListOfInt = [];
    const string = 'string';
    // Objective is to return a filtered list of integers => filtered list of strings is not needed.
    let filteredListOfStr = [];
    for (let i = 0; i < listLen; i++) {
        typeof(list[i]) === typeof(string) ? filteredListStr.push(list[i]) : filteredListInt.push(list[i]);
    }
    return filteredListOfInt;
}
    
 /* Solution #2 */
 
const filterList2 = (list.map(data => {

}));

    

/*
 * NOTES:
 * iterating & removing using .splice() method re-indexes the array => some indices will not be parsed.
 */