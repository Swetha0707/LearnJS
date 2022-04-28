let result='';
function translateConsonant(string){
    for(let i=0;i<string.length;i++){
        if(string[i]=='a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' || string[i] == 'A' || string[i] == 'E' || string[i] == 'I' || string[i] == 'O' || string[i] == 'U' || string[i]==' '){
            result+=string[i];

        }
        else if((string[i]>='a' && string[i]<='z') ||(string[i]>='A' &&string[i]<='Z')){
            result+=string[i]+'o'+string[i];
            
        }
    }
}
translateConsonant("this is fun");
console.log(result);