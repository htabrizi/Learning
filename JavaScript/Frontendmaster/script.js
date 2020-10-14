function devideBy2( array, instructures){
    const output=[];
    for(let i=0;i<array.length;i++){
        output.push(instructures(array[i]));
    }
return output;

}

function multi2(input){
    return input*2;
}
const result =devideBy2([1,2,3],multi2);


console.log(result);

