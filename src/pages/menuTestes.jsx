import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuTestes() {
  return (
    <div>
      <nav className="text-center">
        <Link to="teste0" className="btn btn-warning">Teste 0</Link>
        <Link to="teste1" className="btn btn-warning">Teste 1</Link>
        <Link to="teste2" className="btn btn-warning">Teste 2</Link>
        <Link to="teste3" className="btn btn-warning">Teste 3</Link>
        <Link to="teste4" className="btn btn-warning">Teste 4</Link>
        <Link to="teste5" className="btn btn-warning">Teste 5</Link>
        <Link to="teste6" className="btn btn-warning">Teste 6</Link>
        <Link to="teste7" className="btn btn-warning">Teste 7</Link>
        <Link to="teste8" className="btn btn-warning">Teste 8</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuTestes;
