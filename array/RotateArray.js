// Rotate Array
/**
 * 
Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}

Input: arr[] = {1, 2, 3}, d = 4
Output: {2, 3, 1}
Explanation: The array is rotated as follows:

After first left rotation, arr[] = {2, 3, 1}
After second left rotation, arr[] = {3, 1, 2}
After third left rotation, arr[] = {1, 2, 3}
After fourth left rotation, arr[] = {2, 3, 1}
 */
function rotateArray(arr, d) {
    const n = arr.length;
    d = d % n; // handle d > n

    return [...arr.slice(d), ...arr.slice(0, d)];
}

// Example
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // [3, 4, 5, 6, 1, 2]
console.log(rotateArray([1, 2, 3], 4));         // [2, 3, 1]