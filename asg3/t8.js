function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
}

console.log(repeatedSum(456)); // 6