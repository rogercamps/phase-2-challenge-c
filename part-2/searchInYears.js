const fs = require('fs')

fs.readFile('./cars.json', 'utf-8', (err, data) => {
  if (err) throw new Error('Something went wrong!')
  data = JSON.parse(data)
  let model = []
  let query = process.argv[2].split('-')
  let beginDate = Number(query[0])
  let endDate = Number(query[1])

  data.forEach( car => {
    let automobileData = car.year

    if (car.year >= beginDate && car.year <= endDate) {
      const automobile = {}
      automobile.id = car.id
      automobile.make = car.make
      automobile.model = car.model
      automobile.year = car.year

      model.push(automobile)
    }
  })
  console.log(model)
})
