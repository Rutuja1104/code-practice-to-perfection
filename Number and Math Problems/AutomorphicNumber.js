/**
 * A number is automorphic if its square ends with the number itself.

👉 Example:

5² = 25 → ends with 5 ✅
6² = 36 → ends with 6 ✅
 */
function isAutomorphic(num) {
    let square = num * num;
    return square.toString().endsWith(num.toString());
}

console.log(isAutomorphic(5)); // true
console.log(isAutomorphic(7)); // false