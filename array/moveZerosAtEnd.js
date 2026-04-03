function moveZeros(arr) {
    let j = 0; // position for next non-zero

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}

// Example
console.log(moveZeros([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]