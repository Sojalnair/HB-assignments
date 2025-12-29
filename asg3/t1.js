const states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Kerala", "Odisha", "Tamil Nadu"];
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates); // ["Bihar", "Kerala", "Tamil Nadu"]