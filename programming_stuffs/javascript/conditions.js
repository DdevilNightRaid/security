let condition = 0
if (condition) {
    // code
}
// rest of the code

if (condition) {
    // code
} else {
    // code
}
// rest of the code

if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
// rest of the code
if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}

// Y can use as many else if as you want.
if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
} else if (condition) {
    // code
}
// rest of the code


// Use case 

let isPrinciple = true
if (isPrinciple) {
    console.log('Hi principle')
}
// rest of the code
console.log('Welcome, user')
console.log('')

let age = 2
if (age > 18) {
    console.log('You can open a bank account')
} else {
    console.log('You can not open a bank account')
}

let walletAmout = 3000


if (walletAmout > 30 && walletAmout < 250) {
    console.log('Go by bus 🚌')
} else if (walletAmout > 250 && walletAmout < 2000) {
    console.log('You can afford a taxi 🚕')
} else if(walletAmout > 2000 && walletAmout < 2500){
    console.log('You can rent a cycle 🚲')
} else if(walletAmout > 2500 && walletAmout < 4000){
    console.log('You can go by bike 🛵')
} else if(walletAmout > 4000 && walletAmout < 5000){
    console.log('You can rent a car 🚗')
} else if (walletAmout > 5000){
    console.log('You can go by airways ✈️')
} else {
    console.log('Go by 2 leg power 💪');
}
// rest of the code