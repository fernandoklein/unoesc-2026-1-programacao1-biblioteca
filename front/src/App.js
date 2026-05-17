import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu.js';
import PaginaCatalogo from './componentes/PaginaCatalogo.js';
import PaginaUsuarioLista from './componentes/PaginaUsuarioLista.js';
import PaginaUsuarioCadastro from './componentes/PaginaUsuarioCadastro.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">

    <BrowserRouter>
      <Menu/>        
      <Routes>
        <Route path='/' element={<PaginaCatalogo/>} />
        <Route path='/usuarios' element={<PaginaUsuarioLista/>} />
        <Route path='/usuario' element={<PaginaUsuarioCadastro/>}/>
        <Route path='/usuario/:id' element={<PaginaUsuarioCadastro/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
