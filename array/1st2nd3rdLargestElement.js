const arr = [10, 5, 20, 8, 25, 15];

let first = -Infinity, second = -Infinity, third = -Infinity; // Initialize to the smallest possible value 
// -Infinity is used to handle cases where all numbers in the array are negative

for (let num of arr) {
    if (num > first) {
        third = second;
        second = first;
        first = num;
    } else if (num > second && num !== first) {
        third = second;
        second = num;
    } else if (num > third && num !== second && num !== first) {
        third = num;
    }
}

console.log("First Largest:", first);
console.log("Second Largest:", second);
console.log("Third Largest:", third);