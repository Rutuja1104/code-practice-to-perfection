function convert(s, numRows) {
    // Edge case: no zigzag needed
    if (numRows === 1 || s.length <= numRows) return s;

    // Create rows
    const rows = new Array(numRows).fill("");
    console.log(rows)
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        console.log(rows[currentRow], char)
        rows[currentRow] += char;

        // Change direction at top or bottom
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows
    return rows.join("");
}
console.log(convert("PAYPALISHIRING", 3))
