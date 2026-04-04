function findNonRepeatingElement(arr) {
    let nonrepeating = arr.filter((value, index, self) => {
        return self.indexOf(value) === self.lastIndexOf(value)
    });
    return nonrepeating;
}
console.log(findNonRepeatingElement([1, 1, 2, 3, 4, 4, 5]))