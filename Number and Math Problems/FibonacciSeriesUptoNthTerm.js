// Fibonacci Series upto nth term

// JS
function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a);
        [a, b] = [b, a + b]; // cleaner swap
    }
}

fibonacci(7);

// NODE.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number of terms: ', (input) => {
    let n = parseInt(input);

    let a = 0, b = 1;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }

    rl.close();
});