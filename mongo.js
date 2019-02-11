const mongoose = require('mongoose')

if ( process.argv.length < 3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@fullstack-puhelinluettelo-rdu3d.mongodb.net/puhelinluettelo-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if ( (process.argv.length > 3) && (process.argv[4] !== undefined)) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
  person.save().then(response => {
    console.log(`Lisätään ${person.name} numero ${person.number} luetteloon`);
    mongoose.connection.close();
  })
} else {
  console.log('puhelinluettelo:')  
  Person.find({}).then(people => {
    people.forEach(person => {
      console.log(person.name, person.number);
      mongoose.connection.close();
    })
  })
}