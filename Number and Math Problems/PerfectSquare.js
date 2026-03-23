/**
 * ✅ 1. Perfect Square

A number is a perfect square if it is the square of an integer.

👉 Example:

25 = 5 × 5 ✅
16 = 4 × 4 ✅
 */
function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(20)); // false