// Factor of a number
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);

    console.log(`Factors of ${num}:`);

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }

    rl.close();
});

function printFactors(num) {
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(i);

            if (i !== num / i) {
                console.log(num / i);
            }
        }
    }
}

printFactors(12);