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
    for (let i = 1; i <= Math.sqrt(num); i++) { // we only need to check up to the square root of the number
        if (num % i === 0) {
            console.log(i);// print the factor

            if (i !== num / i) {// check to avoid printing the square root twice for perfect squares
                console.log(num / i);// print the complementary factor
            }
        }
    }
}

printFactors(12);

// for (let index = 0; index < 12; index++) {
//     if (12% index == 0) {
//         if(index%2!==0)
//         console.log("PRIME FACTOR",index)
//     }
// }