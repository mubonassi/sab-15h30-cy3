import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuGeral() {
  return (
    <div>
      <nav className="text-center">
        <Link to="modelo" className="btn btn-danger">Modelo</Link>
        <Link to="menu-testes" className="btn btn-primary">Testes</Link>
        <Link to="menu-desafios" className="btn btn-primary">Desafios</Link>
        <Link to="pokemon" className="btn btn-secondary">PokeApp</Link>
        <Link to="/" className="btn btn-primary">*</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuGeral;
