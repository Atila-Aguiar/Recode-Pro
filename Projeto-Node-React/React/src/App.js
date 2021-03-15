import {Cabeça, Rodape} from './Arquivos/Navega/Index';
import {BrowserRouter} from 'react-router-dom'
import Rota from './Navegação'


function App() {
  return (
      <BrowserRouter>
        <div className="App"> 
          <Cabeça />
          <Rota />
          <Rodape />
        </div>
      </BrowserRouter>
  );
}

export default App;
