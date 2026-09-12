import React from 'react';

function Teste1() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Pias: Funcionalidade e Estilo</h1>
        <p className="lead">
          As pias são elementos essenciais em cozinhas e banheiros, oferecendo
          praticidade no dia a dia.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img
            src="https://panoverse-cdn.com.br/img.panorama/produto/67563/balcao-de-cozinha-para-pia-3-portas-2-gavetas-espaco-para-forno-e-cooktop-italia-preto-panorama-moveis-414248-large.jpg"
            className="img-fluid rounded shadow"
            alt="Pia de cozinha"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Pias de Cozinha</h2>
          <p>
            Geralmente maiores, as pias de cozinha podem ser feitas de inox,
            granito ou outros materiais resistentes.
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 text-center">
          <img
            src="https://mpozenato.fbitsstatic.net/img/p/cuba-pia-de-apoio-para-banheiro-abaulada-luxo-42-c08-bege-mpozenato-112351/278271-1.jpg?w=1000&h=1000&v=no-value"
            className="img-fluid rounded shadow"
            alt="Pia de banheiro"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="mb-3">Pias de Banheiro</h2>
          <p>
            No banheiro, as pias costumam ser mais compactas e podem vir com
            gabinetes para guardar itens de higiene pessoal.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="ratio ratio-16x9 shadow rounded">
            <iframe
              src="https://www.youtube.com/embed/XXD76CSpfc0?si=vyQsvW7wFa_JopeS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teste1;
