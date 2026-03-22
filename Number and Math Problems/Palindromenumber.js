const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let num = parseInt(input);

    function isPalindrome(n) {
        let str = n.toString();
        return str === str.split('').reverse().join('');
    }

    if (isPalindrome(num)) {
        console.log(`${num} is a palindrome`);
    } else {
        console.log(`${num} is NOT a palindrome`);
    }

    rl.close();
});