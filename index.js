// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    let driver = {...obj};
    driver[key] = value;
    return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = {...driver};
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
