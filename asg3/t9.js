function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a sample paragraph with seven words.")); // 7