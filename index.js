function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    });
};


function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
       let d = driver.toLowerCase()
        return d.startsWith(string.toLowerCase())
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}