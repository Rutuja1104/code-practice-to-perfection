// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]
/**
 * Reverse an Array in groups
Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [3, 2, 1, 6, 5, 4, 8, 7]
Explanation: Elements is reversed: [1, 2, 3] → [3, 2, 1], [4, 5, 6] → [6, 5, 4], and the last group [7, 8](size < 3) is reversed as [8, 7].
 */

function reverseInGroups(arr, k) {
    let result = [];
    for (let i = 0; i < arr.length; i += k) { // Iterate through the array in steps of k
        let group = arr.slice(i, i + k).reverse();// Take a group of k elements and reverse it
        result.push(...group);
    }
    return result;
}
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3));

