import '../CSS/baseGeral.css'
import '../CSS/NossosProdutos.css'
import '../CSS/Carrinho.css'
import {Link} from 'react-router-dom'


function Produtos(props){
    let link = `CC?id=${props.id}`

    return  (
            <div class='produto' id={props.id}>
                <img class='imgprod' src={require(`../IMG/${props.nome}.jpg`).default} name={props.nome} />
                <br />
                <p class='info'>{props.info}</p>
                <hr />
                <p class='promo'>{props.promo}</p>

                <button type="button" class="btn btn-info btn-contato"><Link to={link}><p class='preço'>{props.preco}</p></Link></button>
            </div>
    )
}

export default Produtos