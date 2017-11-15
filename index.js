// Code your solution in this file
function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })
  return matchingDrivers;
}

function fuzzyMatch(drivers, firstLetter){
  let wholeOfName = firstLetter.length;
  return drivers.filter(function(driverName){
    return driverName.slice(0, wholeOfName) === firstLetter;
  })
}

function matchName(driver, name){
  
}