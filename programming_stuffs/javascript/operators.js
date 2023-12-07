// Here's a list of JavaScript operators with examples:

// Arithmetic Operators:

// 1. Addition (+):
let sum = 5 + 3;  // Result: 8

// 2. Subtraction (-):
   let difference = 10 - 4;  // Result: 6

// 3. Multiplication (*):
   let product = 6 * 7;  // Result: 42

// 4. Division (/):
   let quotient = 20 / 4;  // Result: 5

// 5. Modulus (%):
   let remainder = 15 % 4;  // Result: 3

// Assignment Operators:

// 6. Assignment (=):
   let x = 10;

// 7. Addition Assignment (+=):
   let y = 5;
   y += 3;  // Equivalent to: y = y + 3;  Result: 8

// ### Comparison Operators:

// 8. Equal (==):
   let isEqual = 5 == '5';  // Result: true

   // 9. Strict Equal (===):
   let isStrictEqual = 5 === '5';  // Result: false

// 10. Not Equal (!=):
    let isNotEqual = 10 != '10';  // Result: false

    // Doesn't checks data type
    1 == 1 // true
    1 == '1' // true

    // Checks datatype
    1 === '1' // false
    1 === 1 // true

    // not equal 
    1 != 1 // false
    1 != '1' // false
    1 != 2 // true
    
    // datatype check not equal
    1 !== 1 // false
    1 !== '1' // true
    1 !== 2 // true
    1 !== '2' // true


// ### Logical Operators:

// 11. Logical AND (&&):
    let logicalAnd = true && true;  // Result: true

// 12. Logical OR (||):
    let logicalOr = true || false;  // Result: true

// 13. Logical NOT (!):
    let logicalNot = !true;  // Result: false

    // meme:
    // boy: will u be my gf
    // programer girl crush:  !Yes

// ### Unary Operators:

// 14. Increment (++) and Decrement (--):
    let count = 5;

    count++;  // Increment: count = count + 1; Result: 6
    count--;  // Decrement: count = count - 1; Result: 5

// Conditional (Ternary) Operator:

// 15. Ternary Operator (? :):
    let lage = 20;
    let lmessage = (age >= 18) ? 'Adult' : 'Minor';

    if(hours < 10){
        console.log('0' + hours);
    } else {
        console.log(hours);
    }

    hours < 10 ? console.log('0' + hours) : console.log(hours);

    if(hours < 10){
        console.log('ten');
    }

    hours < 10 && console.log('ten')
    // normal code 