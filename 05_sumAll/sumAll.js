// const sumAll = function(input1, input2) {
//     if (input1 > input2){
//         let temp = input1;
//         input1 = input2;
//         input2 = temp;
//     }
//     if (input1 < 0 || input2 < 0){
//         return 'ERROR';
//     }
//     if (typeof(input1, input2) != "number"){
//         return 'ERROR';
//     }
//     let sum = input1;
//     for (let i = input1; i < input2; i++){
//         sum = sum + i + 1;
//     }
//     return sum;
// };
const sumAll = function(...input) {
    let sum = 0;
    for (let arg of input){
        sum += arg;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
