import React, { useEffect } from 'react';
import { useState } from 'react';

function Desafio5() {
  const [cliques, setCliques] = useState(0);
  const [forca, setForca] = useState(1);
  const [conquista, setConquista] = useState('Não tem conquista ainda');

  useEffect(() => {
    document.title = `🪑 Cadeiras: ${cliques}`;

    if (cliques >= 1000000) {
      setConquista('🍺 Prêmio: Cadeira de Plástico da Brahma! 🪑');
    }
    else if(cliques >= 500000){
      setConquista('👑 Um império de cadeiras!');
    }
  }, [cliques]);

  return (
    <div className="container py-4">
      <div
        className="card mb-4 shadow border-0 text-white"
        style={{
          backgroundImage: "url('https://picsum.photos/1200/300')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="card-body text-center py-5"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <h1 className="display-4 fw-bold">🪑 Cadeira Clicker 🪑</h1>
          <p className="lead mb-0">
            Construa o maior império de cadeiras do mundo!
          </p>
        </div>
      </div>

      <div className="d-flex gap-4 flex-wrap">
        <div
          className="card shadow flex-fill bg-primary text-white"
          style={{ minWidth: '350px' }}
        >
          <div className="card-body text-center">
            <h4>Ultima Conquista: {conquista}</h4>
            <h3 className="mb-4">🎮 Área de Produção</h3>

            <button
              onClick={() => setCliques(cliques + forca)}
              className="bg-transparent border-0"
            >
              <img
                src="https://em-content.zobj.net/source/serenityos/459/chair_1fa91.png"
                alt=""
                width="220"
              />
            </button>

            <hr />

            <h5>⚡ Força Atual: {forca}</h5>

            <h2 className="fw-bold">🪑 {cliques.toLocaleString()}</h2>

            {cliques > 1000000 && setCliques(1000000)}
            <p className="lead">cadeiras produzidas</p>
          </div>
        </div>

        <div
          className="card shadow flex-fill bg-success text-white"
          style={{ minWidth: '350px' }}
        >
          <div className="card-body">
            <h3 className="text-center mb-4">🏪 Loja de Upgrades</h3>

            <div className="d-grid gap-2">
              {cliques >= 25 && (
                <button
                  className="btn btn-light text-start"
                  onClick={() => {
                    setForca(forca + 1);
                    setCliques(cliques - 25);
                  }}
                >
                  🪵 Madeira Melhor Selecionada
                  <br />
                  <small>+1 de força • Custo: 25 cadeiras</small>
                </button>
              )}

              {cliques >= 100 && (
                <button
                  className="btn btn-light text-start"
                  onClick={() => {
                    setForca(forca + 3);
                    setCliques(cliques - 100);
                  }}
                >
                  🪓 Machado Afiado
                  <br />
                  <small>+3 de força • Custo: 100 cadeiras</small>
                </button>
              )}

              {cliques >= 500 && (
                <button
                  className="btn btn-light text-start"
                  onClick={() => {
                    setForca(forca + 10);
                    setCliques(cliques - 500);
                  }}
                >
                  🧰 Caixa de Ferramentas
                  <br />
                  <small>+10 de força • Custo: 500 cadeiras</small>
                </button>
              )}

              {cliques >= 2000 && (
                <button
                  className="btn btn-warning text-start"
                  onClick={() => {
                    setForca(forca + 30);
                    setCliques(cliques - 2000);
                  }}
                >
                  🔨 Oficina Artesanal
                  <br />
                  <small>+30 de força • Custo: 2.000 cadeiras</small>
                </button>
              )}

              {cliques >= 10000 && (
                <button
                  className="btn btn-warning text-start"
                  onClick={() => {
                    setForca(forca + 100);
                    setCliques(cliques - 10000);
                  }}
                >
                  🏭 Pequena Fábrica
                  <br />
                  <small>+100 de força • Custo: 10.000 cadeiras</small>
                </button>
              )}

              {cliques >= 50000 && (
                <button
                  className="btn btn-danger text-start"
                  onClick={() => {
                    setForca(forca + 500);
                    setCliques(cliques - 50000);
                  }}
                >
                  🚚 Distribuição Nacional
                  <br />
                  <small>+500 de força • Custo: 50.000 cadeiras</small>
                </button>
              )}

              {cliques >= 200000 && (
                <button
                  className="btn btn-danger text-start"
                  onClick={() => {
                    setForca(forca + 2000);
                    setCliques(cliques - 200000);
                  }}
                >
                  🌎 Exportação Internacional
                  <br />
                  <small>+2.000 de força • Custo: 200.000 cadeiras</small>
                </button>
              )}

              {cliques >= 500000 && (
                <button
                  className="btn btn-dark text-start"
                  onClick={() => {
                    setForca(forca + 5000);
                    setCliques(cliques - 500000);
                  }}
                >
                  👑 Império das Cadeiras
                  <br />
                  <small>+5.000 de força • Custo: 500.000 cadeiras</small>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow mt-4 bg-warning-subtle border-warning">
        <div className="card-body text-center">
          <h3 className="mb-4">🏆 Conquistas 🏆</h3>

          <div className="d-flex flex-column align-items-center gap-2">
            {cliques >= 1 && (
              <div className="badge bg-secondary fs-6 p-2">
                🪑 Começando a cadeirar!
              </div>
            )}

            {cliques >= 10 && (
              <div className="badge bg-success fs-6 p-2">
                🌳 Achando uma árvore!
              </div>
            )}

            {cliques >= 500 && (
              <div className="badge bg-primary fs-6 p-2">
                🪓 Achando um machado!
              </div>
            )}

            {cliques >= 1000 && (
              <div className="badge bg-info fs-6 p-2">
                🪵 Cortando a madeira!
              </div>
            )}

            {cliques >= 1500 && (
              <div className="badge bg-warning text-dark fs-6 p-2">
                📦 Recolhendo todas as madeiras!
              </div>
            )}

            {cliques >= 3000 && (
              <div className="badge bg-danger fs-6 p-2">
                🔨 Começando a montar sua primeira cadeira!
              </div>
            )}

            {cliques >= 6000 && (
              <div className="badge bg-success fs-6 p-2">
                ✅ Cadeira pronta!
              </div>
            )}

            {cliques >= 10000 && (
              <div className="badge bg-dark fs-6 p-2">
                🏭 Fabricando mais cadeiras!
              </div>
            )}

            {cliques >= 20000 && (
              <div className="badge bg-primary fs-6 p-2">
                🚚 Fabricação em massa das cadeiras!
              </div>
            )}

            {cliques >= 500000 && (
              <div className="badge bg-danger fs-6 p-2">
                👑 Um império de cadeiras!
              </div>
            )}

            {cliques >= 1000000 && (
              <div className="badge bg-warning text-dark fs-6 p-2">
                🍺 Prêmio: Cadeira de Plástico da Brahma! 🪑
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="card mt-5 mx-auto shadow-sm border-secondary opacity-25"
        style={{ maxWidth: '500px' }}
      >
        <div className="card-body text-center">
          <small className="text-muted">
            🎮 Konami Code
            <br />
            ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️ 🅱️ 🅰️
          </small>

          <div className="d-grid mt-2">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setForca(forca + 50000)}
            >
              +50.000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desafio5;
