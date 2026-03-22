// Find the Nth Term of the Fibonacci Series
/**
 * 
 * 
What does “Nth term” mean?
It means:
1st term → 0
2nd term → 1
3rd term → 1
4th term → 2
5th term → 3
6th term → 5
So if someone asks:

Find 6th term → Answer = 5
Find 8th term → Answer = 13
==================================================================================
 * @param {*} n 
 * @returns 
 * 
 */
function fibonacci(n) {
    if (n <= 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1;

    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

console.log(fibonacci(6)); // 5

// ==================================================================================
// NODE.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter n: ', (input) => {
    let n = parseInt(input);

    let a = 0, b = 1;

    if (n === 1) {
        console.log('Nth Fibonacci number:', a);
    } else if (n === 2) {
        console.log('Nth Fibonacci number:', b);
    } else {
        for (let i = 3; i <= n; i++) {
            let next = a + b;
            a = b;
            b = next;
        }
        console.log('Nth Fibonacci number:', b);
    }

    rl.close();
});