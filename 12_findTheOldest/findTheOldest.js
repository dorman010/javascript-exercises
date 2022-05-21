const findTheOldest = function(people) {
    var currentYear = new Date();
    var yyyy = currentYear.getFullYear();
    people.forEach(person => {
        if (person.yearOfDeath == undefined){
            person.yearOfDeath = yyyy;
            
        }        
    });
    const oldest = people.sort(function(a,b){
        const last = a.yearOfDeath - a.yearOfBirth;
        const next= b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
    });
    console.log(currentYear);
    console.log(yyyy);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
