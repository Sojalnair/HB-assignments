function sumOfProducts(n1, n2) {
    let str1 = n1.toString().padStart(n2.toString().length, '0');
    let str2 = n2.toString().padStart(n1.toString().length, '0');

    let sum = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        let digit1 = parseInt(str1[str1.length - 1 - i] || '0');
        let digit2 = parseInt(str2[str2.length - 1 - i] || '0');
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // 24
console.log(sumOfProducts(123, 45)); // (3*5)+(2*4)+(1*0)=23