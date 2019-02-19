function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase() })
}

// not working
function nameToAttributes (drivers) {
  const newDrivers = drivers.map(function (driver) { return Object.assign({}, { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}) })
  return newDrivers
}

// not working
function attributesToPhrase (drivers) {
  return drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}` } )
}
