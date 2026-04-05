function processString(str) {
    let stack = [];

    for (let char of str) {
        if (char === "#") {
            stack.pop(); // remove last character
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}

// Example
console.log(processString("a#bdf#c")); // bdc