// Perfect number = sum of factors (excluding number) = number
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        console.log(`${num} is a Perfect number`);
    } else {
        console.log(`${num} is NOT a Perfect number`);
    }

    rl.close();
});

function isPerfect(num) {
    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;

            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return num > 1 && sum === num;
}

console.log(isPerfect(28)); // true