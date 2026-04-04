// Remove duplicates.

const arr = [1, 2, 2, 3, 4, 4];
const arr1 = [{
    id: 1,
    name: 'samik',
},
{
    id: 2,
    name: 'john',
}, {
    id: 3,
    name: 'test',
}, {
    id: 3,
    name: 'test',
}];


// Using Set
const unique = [...new Set(arr)];

console.log(unique);

const uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
    // indexOf returns the first index of the value, so if it's not equal to the current index, it means it's a duplicate
});

console.log(uniqueArr);



const uniqueELE = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(uniqueELE);

function removeDuplicates() {
    return arr1.filter((value, index, self) => index == self.findIndex(data => data?.id == value.id))
    // findIndex returns the index of the first element that satisfies the condition, 
    // so if it's not equal to the current index, it means it's a duplicate
}
console.log(removeDuplicates())
