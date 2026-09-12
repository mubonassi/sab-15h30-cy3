import React from 'react';

function Teste8() {
  let nome = 'Murilo';
  let nomes = ['Murilo', 'Caycquckke', 'Agosto'];
  function seila() {
    console.log('sei lá');
  }

  let pessoa1 = {
    nome: 'Murilo',
    idade: 32,
    qtdVideogames: 26,
    namoradas: "falso",

    apresentar() {
      alert(
        `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e eu tenho ${this.qtdVideogames} videogames. E minha situação de namorada(o) é: ${this.namoradas}`
      );
    },
  };

  return (
    <div>
      <h1>Objetos</h1>
      <h2>O que é um objeto?</h2>
      <p>
        Um objeto é um tipo de variável, que possui a capacidade de guardar
        várias informações que estão relacionadas entre si
      </p>
      <p>Um objeto possui: Atributos e Métodos</p>
      <p>Atributos: São as variáveis dentro do objeto</p>
      <p>Métodos: São as funções dentro do objeto</p>

      <h2>Exemplos de objeto</h2>
      <h3>Objeto Singular: Pessoa</h3>
      <p>
        Nome: {pessoa1.nome}
        <br />
        Idade: {pessoa1.idade} anos
        <br />
        Quantidade de Videogames: {pessoa1.qtdVideogames}
        <br />
        Situação de Namoradas: {pessoa1.namoradas}
        <br />
        <button onClick={() => {pessoa1.apresentar()}}>Apresentar</button>
      </p>
    </div>
  );
}

export default Teste8;
