// Write your solution in this file!

let driver = {};
let new_driver = {};  // why did i need to define this?

const updateDriverWithKeyAndValue = (driver, key, value) => {
   new_driver = Object.assign({}, driver);
   new_driver[key] = value;
   return new_driver;
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign(driver, {[key]: value});
    
    // driver.key = value; //why tf can't I use dot notation, why do I have to use bracket notation?
    return driver       //Also why couldn't I use Object.assign(driver, {key: value}), it is naming the key, key
} 

const deleteFromDriverByKey = (driver, key) => {
    let new_driver = Object.assign({}, driver)
    delete new_driver[key]; //also only works with bracket instead of dot WHY!!!!
    return new_driver
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver;
}