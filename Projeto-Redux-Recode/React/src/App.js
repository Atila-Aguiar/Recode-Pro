import Cabeca from './Arquivos/Navega/Componente/Cabeca'
import Rodape from './Arquivos/Navega/Componente/Rodape'
import {BrowserRouter} from 'react-router-dom'
import Rota from './Navegação'


function App() {
  return (
      <BrowserRouter>
        <div className="App"> 
          <Cabeca />
          <Rota />
          <Rodape />
        </div>
      </BrowserRouter>
  );
}

export default App;
