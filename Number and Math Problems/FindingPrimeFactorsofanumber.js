const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);

    console.log(`Prime factors of ${num}:`);

    // Divide by 2 first
    while (num % 2 === 0) {
        console.log(2);
        num = num / 2;
    }

    // Check odd numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            console.log(i);
            num = num / i;
        }
    }

    // If remaining number is prime
    if (num > 2) {
        console.log(num);
    }

    rl.close();
});

function primeFactors(num) {
    let factors = [];

    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    if (num > 2) factors.push(num);

    return factors;
}

console.log(primeFactors(36)); // [2, 2, 3, 3]