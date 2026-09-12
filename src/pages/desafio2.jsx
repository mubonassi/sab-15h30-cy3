import React from 'react';

function Desafio2() {
  const criarPerfil = () => {
    const txtTitulo = document.getElementById('txtTitulo');
    const txtFoto = document.getElementById('txtFoto');
    const titulo = document.getElementById('titulo');
    const foto = document.getElementById('foto');

    titulo.textContent = txtTitulo.value;
    foto.src = txtFoto.value;
  };

  return (
    <div className="text-center">
      <div className="card w-50 mx-auto">
        <h2>Perfil com Foto</h2>
        <input type="text" placeholder="Titulo da Foto" id="txtTitulo" />
        <input type="text" placeholder="URL da Foto" id="txtFoto" />
        <br />
        <button onClick={criarPerfil} className="btn btn-secondary">
          Criar Perfil
        </button>

        <div className="card-body">
          <h3 id="titulo" className="display-3"></h3>
          <img src="" alt="" id="foto" />
        </div>
      </div>
    </div>
  );
}

export default Desafio2;
