const findTheOldest = function (people) {
    const peopleAge = people.map((age) => age.yearOfDeath - age.yearOfBirth);
    let indexHighestAge = peopleAge.indexOf(Math.max(...peopleAge));
    console.log(people[indexHighestAge]);
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
