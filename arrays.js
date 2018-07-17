var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(chocolateBars, foo){
  return ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift("foo")
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo){
  return [...chocolateBars, "foo"]
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push("foo")
  return chocolateBars
}

function accessElementInArray(){
  var myArray = [1,2,3,4]
  return (myArray[2])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  myArray = [1,2,3]
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(){
  var myArray = [1,2,3]
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  iceCreams.pop()
  return iceCreams
}

function removeElementFromEndOfArray(array){
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  return iceCreams.slice(0, iceCreams.length - 1)
}
