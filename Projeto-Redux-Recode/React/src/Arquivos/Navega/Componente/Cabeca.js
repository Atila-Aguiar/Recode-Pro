import '../../CSS/baseGeral.css'
import {Link} from 'react-router-dom'

export default function Cabeça(){
    return(
            <header class="bg-primary w-100 text-center">
                <div class="container w-80 rounded">
                    <nav class="nav nav-pills nav-fill bg-light rounded">
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/"><b>INICIO</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/NossosProdutos"><b>NOSSOS PRODUTOS</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/NossasLojas"><b>LOJAS</b></Link></a>
                        </li>
                        <li class="nav-item my-auto">
                            <a class="nav-link text-primary"><Link to="/FaleConosco"><b>CONTATO</b></Link></a>
                        </li>
                    </nav>
                </div>
                <br />
                <img class="Logo" src={require(`../../IMG/Frame 1.png`).default} />
            </header>
    )
}