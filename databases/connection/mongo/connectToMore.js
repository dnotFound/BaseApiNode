const mongoose = require('mongoose')

// Necessário a criação de um arquivo .json com as informações da conexão
// const databases = require('../config/databases.json')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

// Cria-se um objeto que recebe, para cada conexão, um parâmetro
let connections = {}

exports.createConnections = async () => {
    for (let i = 0; i < databases.length; i++) {
        let e = databases[i]
        let conn = await mongoose.createConnection(`mongodb://${e.location}:${e.port}/${e.database}`, {useUnifiedTopology: true})
        console.log(`[SUCCESS] Mongo connect ${e.name} at: ${e.port}`)
        connections[e.name] = conn
    }
}

// Método que deve ser utilizado para retornar a conexão
exports.getConnections = async () => {return connections}