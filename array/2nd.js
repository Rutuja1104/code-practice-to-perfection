// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// find second largest number

// secondLargest([10, 5, 20, 8, 20])

let arr = [10, 5, 13, 8, 20]
function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }

    }
    return second;

}

console.log("2nd Largest : ", secondLargest(arr));