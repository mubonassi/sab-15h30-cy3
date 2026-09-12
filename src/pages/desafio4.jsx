import React from 'react';

function Desafio4() {
  const bootstrap = 'card mx-auto p-2 border border-4 border-dark';
  const bootstrap2 = 'card p-4';

  const somando = () => {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    let soma = numero1 + numero2;

    resultado.textContent = `${numero1} + ${numero2} = ${soma}`;
  };

  const media = () => {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);
    const nota5 = Number(document.getElementById('nota5').value);
    const textoMedia = document.getElementById('textoMedia');
    const textoSituacao = document.getElementById('textoSituacao');
    const mediaCorte = Number(document.getElementById('mediaCorte').value);

    let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    textoMedia.textContent = `Média Final: ${media}`;

    if (media >= mediaCorte) {
      textoSituacao.textContent = 'Você foi APROVADO';
      textoSituacao.className = 'bg-success text-white lead fs-4';
    } else {
      textoSituacao.textContent = 'Você foi R E P R O V A D O';
      textoSituacao.className = 'bg-danger text-white lead fs-4';
    }
  };

  const imc = () => {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const textoImc = document.getElementById('textoImc');
    const textoGrau = document.getElementById('textoGrau');

    let imc = peso / (altura * altura);
    let situacao = '';

    if (imc <= 18.5) {
      situacao = 'Abaixo do Peso';
    } else if (imc < 24.9) {
      situacao = 'Peso normal';
    } else if (imc < 29.9) {
      situacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      situacao = 'Obesidade Grau I';
    } else if (imc < 39.9) {
      situacao = 'Obesidade Grau II';
    } else {
      situacao = 'Obesidade Grau III';
    }

    textoImc.textContent = `IMC: ${imc}`;
    textoGrau.textContent = situacao;
  };

  const converterGraus = () => {
    const graus = Number(document.getElementById('graus').value);
    const temperatura = document.getElementById('temperatura').value;
    const textoGraus = document.getElementById('textoGraus');

    let f = graus * 1.8 + 32;
    let c = (graus - 32) * 1.8;

    if (temperatura == 'c') {
      textoGraus.textContent = `${graus}ºC > ${f}ºF`;
    } else {
      textoGraus.textContent = `${graus}ºF > ${c}ºC`;
    }
  };

  return (
    <div className="text-center">
      <h2>Calculadoras Diversas</h2>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <div
          className={bootstrap2}
          style={{
            backgroundImage: "url('https://picsum.photos/200/300?random=1')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div id="somando" className={bootstrap}>
            <h3>Easy: Somando dois números 😊</h3>
            <input type="number" id="numero1" placeholder="Digite o N1" />
            <input type="number" id="numero2" placeholder="Digite o N2" />
            <br />
            <button onClick={somando}>Calcular</button>
            <p id="resultado" className="lead fs-1"></p>
          </div>
        </div>
        <hr />
        <div
          className={bootstrap2}
          style={{
            backgroundImage: "url('https://picsum.photos/200/300?random=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div id="media" className={bootstrap}>
            <h3>Calculando a Média Final</h3>
            <input type="number" id="nota1" placeholder="Matemática" />
            <input type="number" id="nota2" placeholder="Geografia" />
            <input type="number" id="nota3" placeholder="Fisica" />
            <input type="number" id="nota4" placeholder="Português" />
            <input
              type="number"
              id="nota5"
              placeholder="Programação do Sor Murilo"
            />
            <hr />
            <input type="number" id="mediaCorte" placeholder="Média Corte" />
            <br />
            <button onClick={media}>Calcular Média</button>
            <p id="textoMedia"></p>
            <p id="textoSituacao"></p>
          </div>
        </div>
        <hr />
        <div
          className={bootstrap2}
          style={{
            backgroundImage: "url('https://picsum.photos/200/300?random=3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div id="imc" className={bootstrap}>
            <h3>Calculadora de IMC</h3>
            <input type="number" placeholder="altura" id="altura" />
            <input type="number" placeholder="peso" id="peso" />
            <button onClick={imc}>Calcular o IMC</button>
            <p id="textoImc"></p>
            <p id="textoGrau"></p>
          </div>
        </div>
        <div
          className={bootstrap2}
          style={{
            backgroundImage: "url('https://picsum.photos/200/300?random=3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div id="converterGraus" className={bootstrap}>
            <h3>Conversão de ºC - ºF</h3>
            <input type="number" id="graus" placeholder="Graus º" />
            <select id="temperatura">
              <option value="c">Celsius ºC</option>
              <option value="f">Fahrenheit ºF</option>
            </select>
            <button onClick={converterGraus}>Converter</button>
            <p id="textoGraus"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desafio4;
