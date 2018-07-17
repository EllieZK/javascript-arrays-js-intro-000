var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(){
  var cities = ["New York", "San Francisco"]
  return ["Philadelphia", ...cities]
}

function destructivelyAddElementToBeginningOfArray() {
  var cities = ["New York", "San Francisco"]
  cities = ["Philadelphia", ...cities]
  return cities
}

function addElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  return [...cities, "Philadelphia"]
}

function destructivelyAddElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  cities = [...cities, "Philadelphia"]
}
