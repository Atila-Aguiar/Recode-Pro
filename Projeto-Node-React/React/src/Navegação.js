import {Switch, Route} from 'react-router-dom'
import Corpo from './Arquivos/Navega/Index';
import CFC from './Arquivos/Navega/FaleConosco';
import CNL from './Arquivos/Navega/NossasLojas';
import CNP from './Arquivos/Navega/NossosProdutos';
import FimC from './Arquivos/Navega/Finalização';
import Carrinho from './Arquivos/Navega/Carrinho';

function Rota(){
    return(
        <Switch>
            <Route path='/' exact component={Corpo} />
            <Route path='/CFC' component={CFC} />
            <Route path='/CNL' component={CNL} />
            <Route path='/CNP' component={CNP} />
            <Route path='/CC' component={Carrinho} />
            <Route path='/FimC' component={FimC} />
        </Switch>
    )
}
export default Rota;