const express = require('express')                  // Genrenciador de rotas
const cors = require('cors')                        // Cors é uma extensão que libera acesso dos dados em outra pagina
const mysql = require('mysql')


const app = express()
app.use(express.json())
app.use(cors())                                     // Usa o cors é permite o acesso dos dados

const conexao = mysql.createConnection({        // Cria a conexão com o MYSQL  
    host:'localhost',                           // "localhost" = ip da maquina atual
    user:'root',                                // "root" = usuario do banco de dados
    password:'',
    database:'fullstack'                        // "Fullstack" = banco de dados
})

app.get('/', function (req, res) {
    //Depois de ter feito a conexão, ele vai rodar uma query no banco de dados, e executar uma função de callBack 
    //A função de callBack retorna um erro no primeiro parametro se tiver, se não retorna null, e no segundo o resultado da query
    conexao.query("Select * from view_produto", function (error,results)  {        
        //Esse metodo res.json manda os dados formatados em .json, ele é do express
        res.json(results)
    })
})


app.post('/produto', function (req, res) {
    let id = req.body.id
    conexao.query(`Select * from produtos where id = ${id}`, function (error,results)  {
        res.json(results)
    })
})

app.post('/cadastro', function(req, res) {
    let dados = req.body
    conexao.query(`Insert into clientes(nome, telefone, email, endereço) value ("${dados.nome}","${dados.telefone}","${dados.email}","${dados.endereco}")`, function (error,results) {
        if(error == null){
            conexao.query("Select MAX(id) from clientes", function (error,results) {
                if(error == null) {
                    conexao.query(`Insert into pedidos(id_cliente, id_produto,quantidade,endereço) value (${results[0]["MAX(id)"]},${dados.id},${dados.quantidade},"${dados.endereco}")`, function (error,results) {
                        if (error == null){
                            res.json({"Resp":"Foi"})
                        } else {
                            console.log(error)
                            res.json({"Resp":"Deu ruim no cadastro do pedido"})
                        }
                    })
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