/*
 * Objective:
 * Complete the moethod that takes a boolean value
 * and return a 'Yes' string true, or a 'No' string
 * for false.
 * 
 * NOTE: solution #4 includes a condition that returns a error if the user
 * enters an invalid entry. 
 *
 */

 /* solution #1 */
const boolToWord = (bool) => bool ? 'Yes' : 'No';

/* solution #2 */
function boolToWord2(bool) {
    return bool ? 'Yes' : 'No';
}

/* solution #3 */
function boolToWord3(bool) {
    const yes = 'Yes';
    const no = 'No';
    if (bool === true) {
        return yes;
    } else {
        return no;
    }
}

/* solution #4 */
function boolToWord4(bool) {
    const yes = 'Yes';
    const no = 'No';
    const errorMessage = 'Please select either (true, false, or a boolean expression)';
    switch (bool) {
        case bool === true:
            return yes;
        case bool === false: 
            return no;
        default:
            return errorMessage;
            
    }
}