const findTheOldest = function(persons) {
    let oldestPerson = persons[0];

    for(let i = 1; i < persons.length; i++)
    {
        if((persons[i].yearOfDeath - persons[i].yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth))
        {
            oldestPerson = persons[i];
        }

        return oldestPerson;
    }

};

// Do not edit below this line
module.exports = findTheOldest;
