// * Operator Exercises
// * Please log all exercises to the console unless stated otherwise

/**
 * Use console.log() to print out the sum of 10 and 17.
 */
function addTwoNumbers() {
    console.log(10 + 17);
}

/**
 * Use console.log to print out the value of 15 minus 1.
 */
function subtractTwoNumbers() {
    console.log(15 - 1);
}

/**
 * Use console.log() to print out the value of multiply 15 times 79.
 */
function multiplyTwoNumbers() {
    console.log(15 * 79);
}

/**
 * Use console.log() to print out the value of 10 divided by 2.
 */
function divideTwoNumbers() {
    console.log(10 / 2);
}

/**
 * Use console.log() to print out the value of 10 modulo divided by 2.
 * 
 * ! Modulo division returns the remainder of the number
 */
function moduloDivideTwoNumbers() {
    console.log(10 % 2);
}

/**
 * Use console.log() to print out the value of 5 to the power of 2.
 */
function exponentiate() {
    console.log(5 ** 2);    
}

/**
 * Increment the value of incrementMe by one, then use console.log() to print
 * out the new value of incrementMe. 
 * 
 * * Note: There are multiple ways of doing this. Do not just add one with the +
 * * operator.
 */
function incrementByOne() {
    let incrementMe = 10;
    // incrementMe++;
    // console.log(incrementMe);
    incrementMe += 1;   // incrementMe = incrementMe + 1;
    console.log(incrementMe);
}

/**
 * Decrement the value of decrementMe by 2, then use console.log() to print out 
 * the new value of decrementMe.
 * 
 * * Note: There are multiple ways of doing this. Do not just subtract 2 with 
 * * the - operator.
 */
function decrementMe() {
    let decrementMe = 10;
    decrementMe--;
    decrementMe--;
    console.log(decrementMe);
}