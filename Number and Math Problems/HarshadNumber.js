/**
 * Harshad Number (Niven Number)

A number is Harshad if it is divisible by the sum of its digits.

👉 Example:

18 → 1 + 8 = 9 → 18 ÷ 9 = 2 ✅
 */
function isHarshad(num) {
    let sum = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    return num % sum === 0;
}

console.log(isHarshad(18)); // true
console.log(isHarshad(19)); // false