const palindromes = function (word) {
    const filteredWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = filteredWord.split('').reverse().join('');
    return filteredWord === reversedWord;
};
// /[^a-z0-9]/g
// Do not edit below this line
module.exports = palindromes;
