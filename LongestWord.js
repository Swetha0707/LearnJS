let str = "I love my dogs a whole lot";
let longLenth = 0;
function longWord(string) {
    const len = string.split(" ");

    for (let i = 0; i < len.length; i++) {
        if (len[i].length > longLenth) {
            longLenth = len[i].length;
        }
    }
    console.log(longLenth);
}
console.log(longWord(str));