function power(base, exp) {
    if (exp === 0) return 1;
    if (exp < 0) return 1 / power(base, -exp);

    return base * power(base, exp - 1);
}

power(4, 2);

// NODE.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter base: ', (baseInput) => {
    rl.question('Enter exponent: ', (expInput) => {
        let base = parseInt(baseInput);
        let exp = parseInt(expInput);

        let result = 1;

        for (let i = 1; i <= exp; i++) {
            result *= base;
        }

        console.log(`${base}^${exp} = ${result}`);

        rl.close();
    });
});

