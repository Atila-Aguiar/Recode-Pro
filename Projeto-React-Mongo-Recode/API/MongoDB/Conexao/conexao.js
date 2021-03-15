const mongoose = require('mongoose')
const banco = 'fullstack'

function conexao(){
    mongoose.connect(`mongodb://localhost/${banco}`, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`MongoDB conectado com o banco "${banco}"`)
    }).catch((error) => {
        console.log(`Erro ao tentar se conectar: \n${error}`)
    })

}

module.exports = conexao()