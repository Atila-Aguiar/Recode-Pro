import {Switch, Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import Store from './Arquivos/Navega/Store/index'

import Corpo from './Arquivos/Navega/Componente/Corpo';
import FaleConosco from './Arquivos/Navega/Pagina/FaleConosco';
import NossasLojas from './Arquivos/Navega/Pagina/NossasLojas';
import NossosProdutos from './Arquivos/Navega/Pagina/NossosProdutos';
import Carrinho from './Arquivos/Navega/Pagina/Carrinho';
import Fim from './Arquivos/Navega/Componente/Finalização';

function Rota(){
    return(
        <Provider store={Store}>
            <Switch>
                <Route path='/' exact component={Corpo} />
                <Route path='/FaleConosco' component={FaleConosco} />
                <Route path='/NossasLojas' component={NossasLojas} />
                <Route path='/NossosProdutos' component={NossosProdutos} />
                <Route path='/Carrinho' component={Carrinho} />
                <Route path='/Fim' component={Fim} />
            </Switch>
        </Provider>
    )
}
export default Rota;