import '../../CSS/baseGeral.css'
import '../../CSS/NossosProdutos.css'

import { useDispatch } from 'react-redux'

function Produtos(props){

    const dispatch = useDispatch()
    function Add_Produto(){
        dispatch({  type:"Adicionar_Produto",
                    produto:props.id
                })
    }

    return  (
            <div class='produto' id={props.id}>
                <img class='imgprod' src={require(`../../IMG/${props.nome}.jpg`).default} name={props.nome} />
                <br />
                <p class='info'>{props.info}</p>
                <hr />
                <p class='promo'>{props.promo}</p>
                <p class='preço'>{props.preco}</p>
                <button type="button" onClick={Add_Produto} class="btn btn-info btn-contato">Adicionar ao Carrinho</button>
            </div>
    )
}

export default Produtos