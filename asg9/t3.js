function modifyArray(arr, newElement) {
    arr.push(newElement);
    arr.pop();
    return arr;
}

console.log(modifyArray([1, 2, 3], 4)); // [1, 2, 3]