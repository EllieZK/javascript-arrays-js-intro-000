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

function accessElementInArray(chocolateBars, foo){
  return (chocolateBars[3]);
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
