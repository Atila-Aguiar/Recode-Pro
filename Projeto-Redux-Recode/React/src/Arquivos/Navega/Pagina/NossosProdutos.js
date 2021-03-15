import { useState } from 'react';
import '../../CSS/baseGeral.css'
import '../../CSS/NossosProdutos.css'
import Produtos from '../Componente/Produto'
import { Link } from 'react-router-dom'

function CNP(){

    const [produtos, setProdutos] = useState([]);


    useState(async () => {
        const answer = await fetch("http://localhost:3001/")
        const data = await answer.json()
        setProdutos(data);
        
    }, []);
    
    const [filtro, setFiltro] = useState("");

       function Filtrar(e){ 
           setFiltro(e.target.name)
       }

       
    const maps = produtos.map(item => { 
        if (filtro == item.tipo) {
        return <Produtos id={item.id} quantidade={item.quantidade} tipo={item.tipo} nome={item.nome} info={item.info} promo={item.promo} preco={item.preco} />
    }   
    else if (filtro =="") {
        return <Produtos id={item.id} quantidade={item.quantidade} tipo={item.tipo} nome={item.nome} info={item.info} promo={item.promo} preco={item.preco} />            
    }
    })
    
    return(
        <section>
            <div class="container d-flex">
                <aside role="complementary">
                    <div class="container aside">
                        <h3>Categorias</h3>
                        <div class="list-group">
                            <a class="list-group-item list-group-item-action" name="" onClick={Filtrar} >(16)  Todos</a>
                            <a class="list-group-item list-group-item-action" name="geladeira" onClick={Filtrar} >(10)  Geladeira</a>
                            <a class="list-group-item list-group-item-action" name="lavaRoupa" onClick={Filtrar} >(02)  Lava Roupa</a>
                            <a class="list-group-item list-group-item-action" name="microOndas" onClick={Filtrar} >(02)  Micro-ondas</a>
                            <a class="list-group-item list-group-item-action" name="fogao" onClick={Filtrar} >(02)  Fogão</a>
                        </div>
                    </div>
                </aside>
                <main role="main">
                <div>
                    <h1 class="display-4 d-inline">Olhe os produtos no </h1>
                    <button class="btn btn-info d-inline mb-4"><Link class="mx-auto my-auto" to="/Carrinho"><p class="mx-auto my-auto text-light">Carrinho</p></Link></button>
                </div>
                <div class="container d-inline-block">
                    {maps}
                </div>
                </main>
            </div>
        </section>
    )
}

export default CNP