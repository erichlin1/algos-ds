/*
 * Requirements:
 * There must be a function for each number from 0 ("zero") to 9 ("nine")
 * There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function represents the right operand
 * Divison should be integer division. For example, this should return 2, not 2.666666...:
 * 
 */ 



function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}



eTest.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);