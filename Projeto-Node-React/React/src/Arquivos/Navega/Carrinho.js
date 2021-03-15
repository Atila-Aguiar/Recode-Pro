import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Carrinho() {

    let url = window.location.href
    let id = url.split("=")[1]

    const [produtos, setProdutos] = useState([]);
    const [quantidade, setQuantidade] = useState(1)
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [endereço, setEndereço] = useState("")

    useEffect( async () => {
        const answer = await fetch("http://localhost:3001/produto",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"id":id})})

        const data = await answer.json()
        setProdutos(data)
        },[])

        let prod = produtos.map((item) =>
        <> 
            <td class="align-middle"><img class='imgprod' src={require(`../IMG/${item.nome}.jpg`).default} name={item.nome} /></td>
            <td class="align-middle"><h1>{item.preco}</h1></td>
            <td class="align-middle"><input type="number" value={quantidade} onChange={(event) => {if(quantidade<1 || quantidade>4){setQuantidade(1)} else {setQuantidade(event.target.value)}}}/></td>
        </>)



        async function Cadastro(event){
            event.preventDefault()

            const answer = await fetch("http://localhost:3001/cadastro",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({  "id":id,
                                    "quantidade":quantidade,
                                    "nome":nome,
                                    "telefone":telefone,
                                    "email":email,
                                    "endereco":endereço})})
            const data = await answer.json()
            if (data.Resp = "Foi"){
                window.location.href = ("/FimC")
            }
        }





    return(
        <>
        <h2 class="display-3 text-center">Carrinho</h2>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Preço Unitário</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {prod}
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-info btn-contato mx-auto" data-toggle="modal"
                        data-target="#form-contato" id="alertaBtn"><p class='preço'>Finalização da Compra</p></button>

                <div class="modal fade" id="form-contato">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Finalização da Compra</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={Cadastro}>
                                <label for="nome" class="col-form-label">Nome:</label>
                                    <input type="text" require class="form-control" name="nome"id="nome" value={nome} onChange={(event) => setNome(event.target.value)}/>

                                    <label for="telefone" class="col-form-label">Telefone:</label>
                                    <input type="text" require class="form-control" name="telefone" id="telefone" placeholder="(00)00000-0000" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>

                                    <label for="email" class="col-form-label">Email:</label>
                                    <input type="email" require class="form-control" name="email" id="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>

                                    <label for="endereço" class="col-form-label">Endereço:</label>
                                    <input type="text" require class="form-control" name="endereço" id="endereço" value={endereço} onChange={(event) => setEndereço(event.target.value)}/>

                                    <br />
                                    <button type="submit" class="btn btn-info">Finalizar Compra</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Carrinho