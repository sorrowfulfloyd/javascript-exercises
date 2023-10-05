const findTheOldest = function (people) {
    let oldestPerson;

    const ages = [{
        firstName: "",
        age: 0,
    }]

    let largest = [{
        name: "",
        age: 0
    }];

    for (i in people) {
        if (people[i].yearOfDeath == undefined) {
            ages.push({
                firstName: people[i].name,
                age: 2023 - people[i].yearOfBirth
            })
        }
        else {
            ages.push({
                firstName: people[i].name,
                age: people[i].yearOfDeath - people[i].yearOfBirth
            })
        }
    }

    for (y in ages) {
        if (ages[y].age > largest[0].age) {
            largest[0].name = ages[y].firstName;
            largest[0].age = ages[y].age;
        }
    }

    for (x in people) {
        if (people[x].name == largest[0].name) { oldestPerson = people[x] }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
