let s=0,m=1;
function sum(array){

    for(let i=0;i<array.length;i++){
        s+=array[i];
    }
}

function multiply(array){

    for(let i=0;i<array.length;i++){
        m*=array[i];
    }
}
sum([1,2,3,4]);
multiply([1,2,3,4]);
console.log(`Sum = ${s}`);
console.log(`Multiply = ${m}`);