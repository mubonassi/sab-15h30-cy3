import React from 'react';

function Desafio3() {
  const artigo = () => {
    const txtTitulo = document.getElementById('txttitulo');
    const txtImagem = document.getElementById('txtimagem');
    const txtTexto = document.getElementById('txttexto');

    const titulo = document.getElementById('titulo');
    const imagem = document.getElementById('imagem');
    const texto = document.getElementById('texto');

    titulo.textContent = txtTitulo.value;
    imagem.src = txtImagem.value;
    texto.textContent = txtTexto.value;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Criador de Artigo</h2>

      <div className="card p-4 shadow-sm mb-4">
        <input
          type="text"
          id="txttitulo"
          className="form-control mb-3"
          placeholder="Digite um título"
        />

        <input
          type="text"
          id="txtimagem"
          className="form-control mb-3"
          placeholder="Cole o link da imagem"
        />

        <textarea
          id="txttexto"
          className="form-control mb-3"
          rows="4"
          placeholder="Digite o texto do artigo"
        ></textarea>

        <button className="btn btn-primary w-100" onClick={artigo}>
          Criar Artigo
        </button>
      </div>

      <div className="card shadow mx-auto" style={{ maxWidth: '700px' }}>
        <div className="card-body">
          <h2 id="titulo" className="text-center mb-4"></h2>

          <div className="row align-items-start">
            <div className="col-md-4 mb-3 mb-md-0 text-center">
              <img
                id="imagem"
                className="img-fluid rounded border border-danger border-3"
                alt=""
              />
            </div>

            <div className="col-md-8">
              <p id="texto" className="text-start"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desafio3;
