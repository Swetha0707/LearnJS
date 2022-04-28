
function findVowelOrConsonant(charac) {
    if (charac == 'a' || charac == 'e' || charac == 'i' || charac == 'o' || charac == 'u' || charac == 'A' || charac == 'E' || charac == 'I' || charac == 'O' || charac == 'U') {

        return true;
    }
    else {
        return false;
    }

}
let vowel = findVowelOrConsonant('a');
console.log(vowel);
vowel = findVowelOrConsonant('z');
console.log(vowel);
vowel = findVowelOrConsonant('O');
console.log(vowel);
vowel = findVowelOrConsonant('B');
console.log(vowel);

