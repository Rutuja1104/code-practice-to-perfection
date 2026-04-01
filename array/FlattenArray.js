const ar = [1, [2, [3, 4]]];

const flat = ar.flat(Infinity);
console.log("flat", flat)

const FalttenArray = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? FalttenArray(item) : item);
    }, []);

}
console.log(FalttenArray(ar))