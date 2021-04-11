const mongoose = require('mongoose')

// Necessário a criação de um arquivo .json com as informações da conexão
// const database = require('../config/databases.json')

const url = `mongodb://${database.location}:${database.port}/${database.database}`

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

mongoose.connect(url, {useUnifiedTopology: true}).then(() => {
    console.log(`[SUCCESS] Mongo connect at: ${database.port}`)
}).catch((err) => {
    console.log(`[ERROR] Mongo connect: ${err}`)
})

module.exports = mongoose