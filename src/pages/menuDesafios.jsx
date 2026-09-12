import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuDesafios() {
  return (
    <div>
      <nav className="text-center">
        <Link to="desafio1" className="btn btn-secondary">Sobre React</Link>
        <Link to="desafio2" className="btn btn-secondary">Perfil com Foto</Link>
        <Link to="desafio3" className="btn btn-secondary">Criador de Artigo</Link>
        <Link to="desafio4" className="btn btn-secondary">Caixa de Calculadoras</Link>
        <Link to="desafio5" className="btn btn-secondary">Cadeira Clicker</Link>
        <Link to="desafio6" className="btn btn-secondary">Free Game API</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuDesafios;
