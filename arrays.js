var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(chocolateBars, foo){
  return ["Crunch", ...chocolateBars]
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

function destructivelyAddElementToEndOfArray(array, element){
  var cities = ["New York", "San Francisco"]
  cities.push("Philadelphia")
  return cities
}

function accessElementInArray(){
  var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
  return (entrepreneurs[0]);
}

function destructivelyRemoveElementFromBeginningOfArray(){
  const days = ["Monday", "Tuesday", "Wednesday"]
  days.shift()
  return days
}

function removeElementFromBeginningOfArray(){
  var cats = ["Milo", "Garfield", "Otis"]
  return cats.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(){
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  iceCreams.pop()
  return iceCreams
}

function removeElementFromEndOfArray(array){
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  return iceCreams.slice(0, iceCreams.length - 1)
}
