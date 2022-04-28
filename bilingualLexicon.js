var string = "merry christmas and happy new year";
function bilingual(str) {
    var lexicon = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new": "nytt",
        "year": "år"
    }
    q = "";
    
    str.toLowerCase().split(" ").map(function(p){
        q += lexicon[p] + ' ';
    });
    
    return q;
}

var Sweden=bilingual(string);
console.log(Sweden);