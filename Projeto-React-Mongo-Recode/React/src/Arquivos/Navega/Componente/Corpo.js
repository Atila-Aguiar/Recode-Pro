import '../../CSS/PaginaInicial.css'
import '../../CSS/baseGeral.css'
import {Link} from 'react-router-dom'

export default function Corpo(){
    return(
        <section> 
            <div class="container bg-gray">
                <h1 class="display-3">Bem vindo a loja para programadores!</h1>
                <p>Aqui você encontra os melhores eletrodomésticos para sua casa que podem ser automatizados!</p>
                <p><a><Link to="/NossosProdutos">Confira nossos produtos!</Link></a></p>
                <br /><br /><br />
            </div>
        </section>
    )
}