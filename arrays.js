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
  cities.unshift("Philadelphia")
  return cities
}

function addElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  return [...cities, "Philadelphia"]
}

function destructivelyAddElementToEndOfArray(){
  var cities = ["New York", "San Francisco"]
  cities.push("Philadelphia")
  return cities
}

function accessElementInArray(){
  var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
  return (entrepreneurs[0]);
}
