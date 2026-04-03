/**
 * Approach (Two Pointer - Optimal)
Maintain a pointer j for the position of the next non-zero element
Traverse array with i
Swap when non-zero is found
 * @param {*} arr 
 * @returns 
 */

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

function moveZeros(arr) {
    const nonZeros = arr.filter(n => n !== 0);
    const zeros = arr.filter(n => n === 0);
    return [...nonZeros, ...zeros];
}

// Example
console.log(moveZeros([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]