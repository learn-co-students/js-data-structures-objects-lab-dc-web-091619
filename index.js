
const driver  = {};
function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({}, driver, {[key]: value})
}


function deleteFromDriverByKey(driver,key,value){
  const newObj = Object.assign({},driver)
  delete newObj[key]
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
  driver[key] = value
  return driver

}

function destructivelyDeleteFromDriverByKey(driver,key){
delete driver[key]
  return driver
}

//- this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.

