let myString = "Javascript is amazing!";
let vowelsMatch = myString.match(/[aeiou]/gi);
let consonantsMatch = myString.match(/[bcdfghjklmnpqrstvwxyz]/gi);

let vowels = vowelsMatch ? vowelsMatch.length : 0;
let consonants = consonantsMatch ? consonantsMatch.length : 0;

console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);