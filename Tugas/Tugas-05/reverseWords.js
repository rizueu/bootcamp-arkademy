/**
 * Function reverseWords()
 * @params text: string
 * @return reversed word
 */
const reverseWords = (text) => {
    if (text.split(" ").length == 1) return text.split("").reverse().join("");
    return text.split(" ").reverse().join(" ");
}

const someWord = 'Saya belajar Javascript';

console.log(reverseWords(someWord));