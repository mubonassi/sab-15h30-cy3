//Bibliotecas
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Menus
import MenuTestes from './pages/menuTestes.jsx';
import MenuGeral from './pages/menuGeral.jsx';
import MenuDesafios from './pages/menuDesafios.jsx';

//Páginas
import Header from './pages/header.jsx';
import Padrao from './pages/padrao.jsx';
import Erro from './pages/erro.jsx';
import Modelo from './pages/modelo.jsx';
import Footer from './pages/footer.jsx';

import Teste0 from './pages/teste0.jsx';
import Teste1 from './pages/teste1.jsx';
import Teste2 from './pages/teste2.jsx';
import Teste3 from './pages/teste3.jsx';
import Teste4 from './pages/teste4.jsx';
import Teste5 from './pages/teste5.jsx';
import Teste6 from './pages/teste6.jsx';
import Teste7 from './pages/teste7.jsx';
import Teste8 from './pages/teste8.jsx';


import Desafio1 from './pages/desafio1.jsx';
import Desafio2 from './pages/desafio2.jsx';
import Desafio3 from './pages/desafio3.jsx';
import Desafio4 from './pages/desafio4.jsx';
import Desafio5 from './pages/desafio5.jsx';
import Desafio6 from './pages/desafio6.jsx';
import Pokemon from './pages/pokemon.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MenuGeral />
        <Routes>
          <Route path="/" element={<Padrao />} />
          <Route path="modelo" element={<Modelo />} />
            <Route path="pokemon" element={<Pokemon />} />

          <Route path="menu-testes" element={<MenuTestes />}>
            <Route path="teste0" element={<Teste0 />} />
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="teste7" element={<Teste7 />} />
            <Route path="teste8" element={<Teste8 />} />
          </Route>

          <Route path="menu-desafios" element={<MenuDesafios />}>
            <Route path="desafio1" element={<Desafio1 />} />
            <Route path="desafio2" element={<Desafio2 />} />
            <Route path="desafio3" element={<Desafio3 />} />
            <Route path="desafio4" element={<Desafio4 />} />
            <Route path="desafio5" element={<Desafio5 />} />
            <Route path="desafio6" element={<Desafio6 />} />
          </Route>

          <Route path="*" element={<Erro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
