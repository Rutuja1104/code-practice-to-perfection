function findRepeatingElement(arr) {
    return [...new Set(arr.filter((item, i) => arr.indexOf(item) !== i))]
}
console.log(findRepeatingElement([1, 1, 2, 3, 4, 4, 5]))

function findRepeatingElements(arr) {
    const freq = {};
    const result = [];

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > 1) {
            result.push(Number(key)); // convert key back to number
        }
    }

    return result;
}

// Example
console.log(findRepeatingElements([4, 5, 1, 2, 0, 4, 1, 2])); // [4, 1, 2]