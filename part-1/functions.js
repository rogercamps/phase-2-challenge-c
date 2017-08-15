//=== weekday =========================

let parsedDate = new Date()

function weekday(date) {
  if (date == 'Invalid Date') {
    throw new Error("Not a valid Date!");
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday']

  let index = date.getDay()
  return days[index];
}

//=== capitalizeFourth =========================

function capitalizeFourth(string) {

  if(!(typeof string === 'string')) {
    throw new Error('Passed argument is not a string!')
  }


  let lowerCasedString = string.toLowerCase()
  let newString = ''

  for (var i = 0; i < lowerCasedString.length; i++) {
    if ((i + 1) % 4 === 0) {
      newString += lowerCasedString[i].toUpperCase()
    } else {
      newString += lowerCasedString[i]
    }
  }
  return newString
}

//=== getValues =========================

function getValues(obj) {

  if(!(typeof obj === 'object')) {
    throw new Error('Passed argument is not an object!')
  }

  let values = Object.values(obj).sort()
  return values
}

//=== filterAround =========================

function filterAround(array, lower, upper) {

  if(!(typeof array === 'object' || array.length)) {
    throw new Error('Not an object dude!')
  }

  let filteredArray = array.filter(arrayElement => {
    if (lower >= arrayElement || arrayElement > upper) {
      return arrayElement
    }
  })

  if (filteredArray.length === 0) {
    return []
  }

  return filteredArray
}



module.exports = {
  weekday,
  capitalizeFourth,
  getValues,
  filterAround
}
