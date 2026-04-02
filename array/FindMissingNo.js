function missing(arr, n) {
    const total = (n * (n + 1)) / 2; // sum of first n natural numbers
    console.log(total)
    const sum = arr.reduce((a, b) => a + b, 0); // Sum of elements in the array
    return total - sum;
}
const arr = [1, 2, 4, 5]; // missing 3
const n = 5;

console.log(missing(arr, n));