/*
 * Objective:
 * Create a function that does the four basic mathematical operations (*, /, -, +).
 * Accepts only integer values
 */

 /* solution #1 */
 
 function basicMathOp(operation, integer1, integer2) {
    if (operation === '+') {
        return integer1 + integer2;
    } else if (operation === '-') {
        return integer1 - integer2;
    } else if (operation === '*') {
        return integer1 * integer2;
    } else {
        return integer1 / integer2;
    }
}

/* solution #2 */

function basicMathOp2(operation, integer1, integer2) {
    switch (operation) {
        case '+':
            return integer1 + integer2;
        case '-':
            return integer1 - integer2;
        case '*':
            return integer1 * integer2;
        case '/':
            return integer1 / integer2;
        default:
        // a default case does not need to be declared since if any of the cases 
        // are not satisfied, the function will return undefined anyways. 
            return undefined;
    }
}
