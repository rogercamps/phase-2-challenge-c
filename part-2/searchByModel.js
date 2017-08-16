const fs = require('fs')

fs.readFile('./cars.json', 'utf-8', (err, data) => {
  if (err) throw new Error('Something went wrong!')
  const parsedData = JSON.parse(data)
  let query = process.argv[2].toLowerCase()
  let model = []

  parsedData.forEach( car => {
    let automobileData = car.model.toLowerCase()


    if (automobileData.match(query)) {
      let automobile = {}
      automobile.id = car.id
      automobile.model = car.model
      automobile.year = car.year
      automobile.last_owner = car.last_owner
      automobile.data_purchased = car.data_purchased

      model.push(automobile)
    }
  })
  console.log(model)
})
