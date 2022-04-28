function charFreq(str){
    return str.split('').reduce(function(obj, letter){
        obj[letter] = ++obj[letter] || 1;
        return obj;
    }, {});
}

var phrase = "abbabcbdbabdbdbabababcbcbab";
    console.log(charFreq(phrase));