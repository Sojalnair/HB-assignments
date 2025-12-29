function correctfn(str, wrong, correct) {
    return str.replace(wrong, correct);
}

console.log(correctfn("I love Pythn", "Pythn", "Python")); // "I love Python"