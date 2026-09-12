import React, { useEffect, useState } from 'react';

function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados);
      });
  }, [id]);

  const gerarId = () => {
    setId(Math.floor(Math.random() * 1025));
  };

  const tocarSom = () => {
    const som = new Audio(pokemon.cries.latest);
    som.volume = 0.5;
    som.play();
  };

  return (
    <>
      <style>{`
        .pokemon-card {
          width: 380px;
          background: #f8c928;
          border: 8px solid #b8860b;
          border-radius: 18px;
          padding: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,.35);
        }

        .pokemon-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
        }

        .pokemon-header h2 {
          margin: 0;
          text-transform: capitalize;
          font-weight: bold;
        }

        .pokemon-hp {
          color: #b00000;
          font-weight: bold;
        }

        .pokemon-image {
          height: 220px;
          background: linear-gradient(#cceeff, #ffffff);
          border: 5px solid #555;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .pokemon-image img {
          width: 170px;
          image-rendering: pixelated;
        }

        .pokemon-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 8px;
          font-weight: bold;
        }

        .pokemon-description {
          background: #ffe77a;
          border: 2px solid #9b7200;
          border-radius: 5px;
          padding: 10px;
          margin-top: 8px;
        }

        .pokemon-line {
          display: flex;
          justify-content: space-between;
          padding: 7px 3px;
          border-bottom: 1px solid #b18b16;
        }

        .pokemon-line:last-child {
          border-bottom: none;
        }

        .pokemon-footer {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-top: 12px;
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="pokemon-card">
          <div className="pokemon-header">
            <div>
              <small>Pokémon</small>
              <h2>{pokemon.name}</h2>
            </div>

            <div className="pokemon-hp">HP {pokemon.id}</div>
          </div>

          <div className="pokemon-image">
            <img src={pokemon.sprites?.front_default} alt="" />
            <img src={pokemon.sprites?.front_shiny} alt="" />
          </div>

          <div className="pokemon-info">
            <span className="badge bg-danger text-capitalize">
              {pokemon.types?.[0]?.type?.name}
            </span>

            <span>#{pokemon.id}</span>
          </div>

          <div className="pokemon-description">
            <div className="pokemon-line">
              <span>Habilidade</span>
              <strong className="text-capitalize">
                {pokemon.abilities?.[0]?.ability?.name}
              </strong>
            </div>

            <div className="pokemon-line">
              <span>1º Ataque</span>
              <strong className="text-capitalize">
                {pokemon.moves?.[0]?.move?.name}
              </strong>
            </div>
          </div>

          <div className="pokemon-footer">
            <button
              onClick={() => {
                gerarId();
              }}
              className="btn btn-danger"
            >
              Novo Pokémon
            </button>

            <button
              onClick={() => {
                tocarSom();
              }}
              className="btn btn-dark"
            >
              🔊 Som
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
