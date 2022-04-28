let str = "I love my dogs a whole lot";
let integereg = 3;
let array=[];
function longWord(string,integereg) {
    const len = string.split(" ");
    let l=0;
    for (let i = 0; i < len.length; i++) {
        if (len[i].length > integereg) {
            array[l] = len[i];
            l++;
        }
    }
    console.log(array);
}
console.log(longWord(str,integereg));