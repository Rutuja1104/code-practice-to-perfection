function findRepeatingElement(arr) {
    let repeating = arr.filter((value, index, self) => {
        return self.indexOf(value) !== self.lastIndexOf(value)
    });
    return new Set([...repeating]);
}
console.log(findRepeatingElement([1, 1, 2, 3, 4, 4, 5]))