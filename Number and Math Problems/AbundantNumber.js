/**
 * Abundant Number

A number is abundant if the sum of its proper factors is greater than the number.

👉 Example:

12 → factors: 1,2,3,4,6
Sum = 16 > 12 ✅
 */
function isAbundant(num) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) { // divide by 2 because no factor can be greater than half of the number
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum > num;
}

console.log(isAbundant(12)); // true
console.log(isAbundant(10)); // false