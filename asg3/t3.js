let string = 'INDIA'.split('');
string.splice(2, 0, 'O', 'N', 'E', 'S'); // add characters after 'IN'
console.log(string.join('')); // "INDONESIA"