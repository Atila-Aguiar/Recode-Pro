const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())         

const conexao = require('./Mysql/index')
require('./MongoDB/Conexao/conexao')
require('./MongoDB/Modelo/contato')
const Contato = mongoose.model('contato')


app.get('/', function (req, res) {
        conexao.query("Select * from view_produto", function (error,results)  {        
        res.json(results)
    })
})



app.get('/contato', async (req, res) => {
    const Resposta = await Contato.find()
    const Json = await Resposta

    return res.json(Json)
})

app.post('/contato', (req,res) => {
    const novoFeedback = new Contato({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.texto
    })
    novoFeedback.save()
    
    res.json({"Resp":"Foi"})
})



app.post('/produto', function (req, res) {
    let id = req.body.id
    ids = id.map(item => `id= ${item}`)
    conexao.query(`Select * from produtos where id in (${id})`, function (error,results)  {
        res.json(results)
    })
})


app.post('/cadastro', function(req, res) {
    let dados = req.body
    conexao.query(`Insert into clientes(nome, telefone, email, endereço) value ("${dados.nome}","${dados.telefone}","${dados.email}","${dados.endereco}")`, function (error,results) {
        if(error == null){
            conexao.query("Select MAX(id) from clientes", function (error,results) {
                if(error == null) {
                    req.body.id.map(item => {
                        conexao.query(`Insert into pedidos(id_cliente, id_produto,quantidade,endereço) value (${results[0]["MAX(id)"]},"${item}",${dados.quantidade},"${dados.endereco}")`, function (error,results) {
                            if (error != null){
                                console.log(error)
                                res.json({"Resp":"Deu ruim no cadastro do pedido"})                              
                        }
                        })
                    })
                res.json({"Resp":"Foi"})   
                }
            })
        } else {
            console.log(error)
            res.json({"Resp":"Deu ruim no cadastro de cliente"})
        }
    })
})


const porta = 3001
app.listen(porta, function (){
    console.log(`Rodando na porta: ${porta}...`)
})