// Strong number
// 1! + 4! + 5! = 1 + 24 + 120 = 145 ✅
// NODE.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(`${num} is a Strong number`);
    } else {
        console.log(`${num} is NOT a Strong number`);
    }

    rl.close();
});

// JAVASCRIPT
/**
 * const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
 * It is a precomputed factorial array.
 */

const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function isStrong(num) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += fact[digit];
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isStrong(145)); // true