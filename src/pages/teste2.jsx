import React from 'react';

function Teste2(){

  function exemplo(){

  }

  const nome = "Murilo Bonassi" //o valor não pode mudar por ser constante
  const coisa = document.getElementById('oi'); //puxando elemento

  const teste = () => {
    alert('TESTE TESTADO COM TUSTESSO');
  }
  const testeP = (texto) => alert(texto);

  const testeE = () => {
    const texto = document.getElementById('texto');
    texto.textContent = 'Testado';
  }
  

  return(
    <div className="text-center">
      <h2>Teste 2</h2>

      <button onClick={teste}>Teste Uno</button>
      <button onClick={() => testeP("aaaaaaaaaaaaa")}>Teste II</button>
      <button onClick={testeE}>Teste Three</button>
      <p id="texto"></p>
    </div>
  );
}

export default Teste2;