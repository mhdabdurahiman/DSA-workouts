function flattenArray(arr, depth=1) {
    const flattened = [];
    arr.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            flattened.push(...flattenArray(item, depth-1));
        } else {
            flattened.push(item);
        }
    });
    return flattened
}

const nestedArray = [1,2,[3,4,[5,6]]];
const flattenedArray = flattenArray(nestedArray, 2);
console.log(flattenedArray);