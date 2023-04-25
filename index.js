// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]

function findMatching(names, string){
    const listOfDrivers = [];
    for (const names of drivers){
        if (string === drivers){
        return listOfDrivers.push(drivers)    
        }
    } 
    return names.filter(names => names.toUpperCase() === string.toUpperCase()) 
}

function fuzzyMatch(names, string){
    return names.filter(names => names[0] === string[0])
}

function matchName(drivers, argument){
    return drivers.filter(function
    (driver){return driver.name === argument })
}