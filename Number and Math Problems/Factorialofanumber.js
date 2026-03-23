// JS
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
factorial(4);
// NODE.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let n = parseInt(input);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    console.log(`Factorial of ${n} is ${fact}`);

    rl.close();
});