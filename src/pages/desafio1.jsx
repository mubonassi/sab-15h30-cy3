import React from "react";

function Desafio1() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: "700px", borderRadius: "15px" }}>
        
        <img
          src="https://picsum.photos/700/300"
          className="card-img-top mb-3"
          alt="Imagem aleatória"
          style={{ borderRadius: "10px" }}
        />

        <div className="card-body">
          <h2 className="card-title text-center mb-3">O que é React?</h2>
          
          <p className="card-text text-justify">
            React é uma biblioteca JavaScript utilizada para criar interfaces de usuário de forma
            dinâmica e eficiente. Ele permite dividir a aplicação em pequenos componentes reutilizáveis,
            facilitando a organização e manutenção do código. Com React, é possível atualizar apenas
            partes específicas da tela sem recarregar toda a página, proporcionando uma experiência
            mais rápida e fluida para o usuário.
          </p>

          <p className="card-text text-justify">
            Apesar de muitas pessoas chamarem de “linguagem React”, na verdade React não é uma linguagem,
            mas sim uma biblioteca que funciona junto com o JavaScript. Ele utiliza uma sintaxe chamada
            JSX, que mistura HTML com JavaScript, tornando o código mais intuitivo para a construção
            de interfaces modernas.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Desafio1;