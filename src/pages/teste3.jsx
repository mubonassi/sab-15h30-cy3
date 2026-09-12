import React from 'react';
import {useState} from 'react';

function Teste3(){
  const [numero,setNumero] = useState(0);
  const [mudar,setMudar] = useState(0);

  const mudarNumero = () => {
    setNumero(50);
  }
  return(
    <div>
      <h2>Testando useState (Variável de Estado do React)</h2>
      <h3>Número do State: {numero}</h3>
      <button onClick={mudarNumero}>Mudar número para 50 (via JS)</button><br/>
      <button onClick={() => setNumero(100)}>Mudar para 100</button>
      <button onClick={() => setNumero(numero+1)}>+1</button>
      <button onClick={() => setNumero(numero-1)}>-1</button>
      <button onClick={() => setNumero(numero*2)}>*2</button>
      <button onClick={() => setNumero(numero/2)}>/2</button>
      <button onClick={() => setNumero(numero**2)}>^2</button>
      <button onClick={() => setNumero(0)}>Resetar</button><br/>
      
      <input type="number" onChange={(e) => setMudar(Number(e.target.value))} placeholder="Número para Adicionar"/>

      <button onClick={() => setNumero(mudar)}>Mudar para Número</button>
      <button onClick={() => setNumero(numero + mudar)}>Adicionar Número</button>

      <h2>Verificando o useState</h2>
      {numero >= 1000 && <h3>Passou de M I L!</h3>}
      {numero >= 5000 && <h3>Passou de SHMCO M I L!</h3>}
      {numero >= 1000000 && <h3>Passou de M I L Ã O!</h3>}
      {numero >= Infinity && <h3>AO INFINITO!</h3>}
    </div>
  );
}

export default Teste3;