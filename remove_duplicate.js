const arr = [1, 2, 3, 3, 2, 2, 3];
const output = arr.filter((item, index) => {
    console.log(item, index, arr.indexOf(item));
    return index == arr.indexOf(item)
});

console.log(output);
// 1 0 0
// 2 1 1
// 3 2 2
// 3 3 2
// 2 4 1
// 2 5 1
// 3 6 2
// [ 1, 2, 3 ] //final output
