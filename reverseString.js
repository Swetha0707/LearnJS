
let inputString="jag testar";
let reverseInput = '';


function reverseStr(input) {
    for (let len = input.length - 1; len >= 0; len--) {
        reverseInput += input[len];

    }
    return reverseInput;
}
console.log("The original string = " + inputString);
console.log("The reverse string = " + reverseStr(inputString));