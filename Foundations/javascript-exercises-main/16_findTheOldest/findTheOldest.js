const findTheOldest = function(arr) {
    let arrSorted = arr.sort((a, b) => { 

        let aBirthYear = a.yearOfBirth
        let bBirthYear = b.yearOfBirth

        let aYearOfDeath = 0;
        let bYearOfDeath = 0;

        if (!a.yearOfDeath) { aYearOfDeath = 2025; } else { aYearOfDeath = a.yearOfDeath };
        if (!b.yearOfDeath) { bYearOfDeath = 2025; } else { bYearOfDeath = b.yearOfDeath };

        let aAge = aYearOfDeath - aBirthYear;
        let bAge = bYearOfDeath - bBirthYear;

        return bAge - aAge;
    
    });

    return arrSorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;
