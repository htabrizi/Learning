// function devideBy2( array, instructures){
//     const output=[];
//     for(let i=0;i<array.length;i++){
//         output.push(instructures(array[i]));
//     }
// return output;

// }

// function multi2(input){
//     return input*2;
// }

// const result =devideBy2([1,2,3],multi2);


// console.log(result);

// review6
// review7
// review7-1
// review 8


function outer (){
    let counetr =0;
    function incrementCounter(){
        counetr ++;
            }
    return incrementCounter;

}
const myNewFunction=outer();
myNewFunction();
myNewFunction();
learn2
