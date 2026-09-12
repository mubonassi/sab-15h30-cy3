import React from 'react';

function Erro() {
  return (
    <div className="container-fluid p-4">
      <div className="text-center text-danger p-5 rounded-4 border border-5 border-danger shadow-lg fundo" >
        <h2 className="display-1 fw-bold text-uppercase bg-dark rounded-5">🚫 Erro 404 🚫</h2>

        <p className="lead text-dark bg-light">Página não encontrada</p>
      </div>
    </div>
  );
}

export default Erro;
