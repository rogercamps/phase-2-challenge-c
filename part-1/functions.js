//=== weekday =========================
function weekday(date) {
  // if (!(date instanceof Date)) {
  //   return "Not a valid Date";
  // }
  let anyDay = new Date(date)


  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']

  let index = anyDay.getDay()
  return days[index];
}

//=== capitalizeFourth =========================

function capitalizeFourth(string) {
  let new capFourth = 
  return capFourth

}

//=== getValues =========================

function getValues(obj) {
  let values = Object.values(obj)
  return values.sort()
}

//=== filterAround =========================

function filterAround(array, lower, upper) {

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
