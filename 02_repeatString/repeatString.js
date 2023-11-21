const repeatString = function(word, num) {
    let i = 0;
    let string = '';
    if (num < 0){
        return 'ERROR';
    } else {
    while (i < num){
        string += word;
        i++;
    }
    return string;
}
};


// Do not edit below this line
module.exports = repeatString;


