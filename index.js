// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    let obj = { [key]: value}
    const newDriver = Object.assign({}, driver, obj)
    return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const newObj = {...driver}
    delete newObj[key]
    return newObj
}


function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
