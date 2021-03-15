import '../../CSS/baseGeral.css'

export default function Rodape(){
    return(
        <footer class="page-footer bg-primary text-center">
            <div class="container">
                <br />
                <h3>Formas de pagamento</h3>
                <img src={require(`../../IMG/FormasDePagamento.jpg`).default} alt="Formas de pagamento" class="rodape" />
            </div>  
        </footer>
    )
}