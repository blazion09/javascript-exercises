const removeFromArray = function(array, ...remover) {
    // function check(temp){
    //     return temp != remover;
    //   }
    
    return array.filter(temp => !(remover.includes(temp)));
    
};

// Do not edit below this line
module.exports = removeFromArray;
