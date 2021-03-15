import '../CSS/PaginaInicial.css'
import '../CSS/baseGeral.css'
import {Link} from 'react-router-dom'

export function Cabeça(){
    return(
            <header class="bg-primary w-100 text-center">
                <div class="container w-80 rounded">
                    <nav class="nav nav-pills nav-fill bg-light rounded">
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/"><b>INICIO</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/CNP"><b>NOSSOS PRODUTOS</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/CNL"><b>LOJAS</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/CFC"><b>CONTATO</b></Link></a>
                        </li>
                    </nav>
                </div>
                <br />
                <img class="Logo" src={require(`../IMG/Frame 1.png`).default} />
            </header>
    )
}

export function Corpo(){
    return(
        <section> 
            <div class="container bg-gray">
                <h1 class="display-3">Bem vindo a loja para programadores!</h1>
                <p>Aqui você encontra os melhores eletrodomésticos para sua casa que podem ser automatizados!</p>
                <p><a><Link to="/CNP">Confira nossos produtos!</Link></a></p>
                <br /><br /><br />
            </div>
        </section>
    )
}

export function Rodape(){
    return(
        <footer class="page-footer bg-primary text-center">
            <div class="container">
                <br />
                <h3>Formas de pagamento</h3>
                <img src={require(`../IMG/FormasDePagamento.jpg`).default} alt="Formas de pagamento" class="rodape" />
            </div>  
        </footer>
    )
}

export default Corpo