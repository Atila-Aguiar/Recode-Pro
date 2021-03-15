import '../CSS/baseGeral.css'

function CFC(){
    return(
        <section>
            <div class="container text-center">
                <h1 class="display-3">Contato</h1>
                <div class="contato">
                    <img width='20%' src={require(`../IMG/email.png`).default} /><p>contato@eletrofullstack.com</p>
                    <img width='20%' src={require(`../IMG/Whatsapp.png`).default} /><p>(00)0000-0000</p>
                </div>
                <hr />
                <div class="text-center">
                    <form>
                        <h1 class="display-4">Escreva para nós!</h1>

                        <div class="form-group">
                            <label for="Nome">Nome:</label>
                            <input type="text" class="form-control" id="Nome" />
                        </div>
                        <div class="form-group">
                            <label for="e-mail">E-mail:</label>
                            <input type="email" class="form-control" id="e-mail" />
                        </div>
                        <div class="form-group">
                            <label for="textarea">Mensagem:</label>
                            <textarea class="form-control" id="textarea" rows="5"></textarea>
                        </div>
                        <input type="submit" />
                    </form><br />
                </div>
            </div>
        </section>
    )
}

export default CFC;