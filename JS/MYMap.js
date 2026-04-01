Array.prototype.myMap = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
};

const arr = [1, 2, 3];

const result = arr.myMap((num) => num * 2);

console.log(result);