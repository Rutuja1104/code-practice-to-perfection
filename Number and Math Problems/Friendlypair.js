/**
 * Friendly Pair

Two numbers are friendly if they have the same abundancy index:

👉 Formula:

(sum of divisors) / number

👉 Example:

6 → (1+2+3+6)/6 = 2
28 → (1+2+4+7+14+28)/28 = 2 ✅
 */

function sumOfDivisors(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum;
}

function isFriendly(a, b) {
    return (sumOfDivisors(a) / a) === (sumOfDivisors(b) / b);
}

console.log(isFriendly(6, 28)); // true