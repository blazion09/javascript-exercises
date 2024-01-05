const findTheOldest = function (people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let oldest = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        let current = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        // return oldest < current ? currentAge : oldestAge;
        if (current > oldest){
            return currentPerson;
        } else{
            return oldestPerson;
        }
    })
};

const getAge = function (birth, death) {
    const currentYear = new Date().getFullYear();
    if (death){
        return death - birth;
    } else {
        return currentYear - birth;
    }
}
// new Date().getFullYear();
// Do not edit below this line
module.exports = findTheOldest;
