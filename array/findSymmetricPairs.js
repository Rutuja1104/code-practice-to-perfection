function findSymmetricPairs(pairs) {
    let set = new Set();
    let result = [];

    for (let [a, b] of pairs) {
        const key = `${a},${b}`
        const reversKey = `${b},${a}`
        if (set.has(reversKey)) {
            result.push([a, b])
        } else {
            set.add(key)
        }
    }
    return result
}
const arr = [[1, 2], [3, 4], [2, 1], [5, 6], [4, 3]];
console.log("ANS : ",findSymmetricPairs(arr));