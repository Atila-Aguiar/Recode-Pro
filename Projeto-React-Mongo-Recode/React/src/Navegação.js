import {Switch, Route} from 'react-router-dom'

import { Provider } from 'react-redux'         //Importamos o Provider pra jogar o Store pros outros Comp
import Store from './Arquivos/Navega/Store/index'   //Importamos o Store que acabamos de criar

import { lazy } from 'react'
import { Suspense } from 'react'

//Importação com LazyLoad
const LCorpo = lazy(() => import('./Arquivos/Navega/Componente/Corpo'))
const LFaleConosco = lazy(() => import('./Arquivos/Navega/Pagina/FaleConosco'))
const LNossasLojas = lazy(() => import('./Arquivos/Navega/Pagina/NossasLojas'))
const LNossosProdutos = lazy(() => import('./Arquivos/Navega/Pagina/NossosProdutos'))
const LCarrinho = lazy(() => import('./Arquivos/Navega/Pagina/Carrinho'))
const LFim = lazy(() => import('./Arquivos/Navega/Componente/Finalização'))




//Colocando o LazyLoad entre o Suspense pra renderizar a tag <p> caso demore no carregamento
function Rota(){
    return(
        <Provider store={Store}>
            <Switch>
                <Suspense fallback={<p>Carregando...</p>}>
                    <Route path='/' exact component={LCorpo} />
                    <Route path='/FaleConosco' component={LFaleConosco} />
                    <Route path='/NossasLojas' component={LNossasLojas} />
                    <Route path='/NossosProdutos' component={LNossosProdutos} />
                    <Route path='/Carrinho' component={LCarrinho} />
                    <Route path='/Fim' component={LFim} />
                </Suspense>
            </Switch>
        </Provider>
    )
}
export default Rota;


















// const Componentes = [LCorpo,LFaleConosco,LNossasLojas,LNossosProdutos,LCarrinho,LFim]
    // const Teste = Componentes.map((item) => {
    //     return(
    //     <Suspense fallback={<p>Carregando...</p>}>
    //             {item}
    //     </Suspense>
    //     )
    // })

    // const Componentes = {
    //     'Corpo': () => <CompSuspense Comp={LCorpo} />,
    //     'FaleConosco': () => <CompSuspense Comp={LFaleConosco} />,
    //     'NossasLojas': () => <CompSuspense Comp={LNossasLojas} />,
    //     'NossosProdutos': () => <CompSuspense Comp={LNossosProdutos} />,
    //     'Carrinho': () => <CompSuspense Comp={LCarrinho} />,
    //     'Fim': () => <CompSuspense Comp={LFim} />
    // }