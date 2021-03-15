import '../../CSS/baseGeral.css'
import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react'


function CFC(){

    const [feed,setFeed] = useState([])

    async function Cadastro(event){
        event.preventDefault()

        const answer = await fetch("http://localhost:3001/contato",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({  "nome":event.target.Nome.value,
                                "email":event.target.email.value,
                                "texto":event.target.textarea.value})})
        const data = await answer.json()
        if (data.Resp == "Foi"){
            <Navigate to="/FaleConosco" />
        }
    }

    async function Feedbacks () {
        const feedback = await fetch("http://localhost:3001/contato")
        const promFeed = await feedback.json()
        setFeed(promFeed)
    }

    var saida = feed.map(item => <><p>{item.mensagem}</p><hr /></>)

    return(
        <section>
            <div class="container text-center">
                <h1 class="display-3">Contato</h1>

                <div class="contato container d-inline-flex">
                    <div class="mx-auto" >
                        <img width='100px;' src={require(`../../IMG/email.png`).default} />
                        <p class="align middle">contato@eletrofullstack.com</p>
                    </div>
                    <div class="mx-auto">
                        <img width='100px;' src={require(`../../IMG/Whatsapp.png`).default} />
                        <p >(00)0000-0000</p>
                    </div>
                </div>

                <hr />
                <div class="container">
                    <h1 class="display-4">Escreva para nós!</h1>
                        <form onSubmit={Cadastro}>
                            <label for="Nome">Nome:</label>
                            <input type="text" required class="form-control" id="Nome" />

                            <label for="email">E-mail:</label>
                            <input type="email" required class="form-control" id="email" />

                            <label for="textarea">Mensagem:</label>
                            <textarea class="form-control" required id="textarea" rows="5" maxlength="300" /><br />


                        <button type='submit' class="btn btn-secondary">Enviar</button>
                        </form><br />

                        <button type="button" onClick={Feedbacks} class="btn btn-warning btn-contato" data-toggle="modal"
                        data-target="#form-contato" id="alertaBtn"><p class='preço'>Ver Feedbacks</p></button>
                        <br />
                        <br />
                                <div class="modal fade" id="form-contato">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Feedbacks</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                {saida}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                </div>
            </div>
        </section>
    )
}

export default CFC;