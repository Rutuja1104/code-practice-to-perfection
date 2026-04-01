function isArmstrong(num) {
    let digits = num.toString().length;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153)); // true

// NODE.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);
    let digits = input.length;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is NOT an Armstrong number`);
    }

    rl.close();
});

// Armstrong number in a given range
function isArmstrongINRange(num) {
  let digits = num.toString().length;
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

for (let i = 1; i <= 1000; i++) {
  if (isArmstrongINRange(i)) {
    console.log(i);
  }
}
