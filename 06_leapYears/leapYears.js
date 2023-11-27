const leapYears = function(year) {
    if(year % 4 == 0 && year % 100 == 0 && year % 400 != 0){
        return false;
    } else if(year % 100 == 0 && year % 400){
        return true;
    } else if(year % 4 == 0) {
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

// GET year
//     IF year % 4 == 0 THEN true
//     IF year % 100 == 0 && year % 400 THEN true
//     ELSE false