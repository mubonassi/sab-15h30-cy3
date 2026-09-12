import React, {useEffect, useState } from 'react';

function Teste7() {
  const [raposa, setRaposa] = useState('');

  const [indice,setIndice] = useState(0);
  const [produto,setProduto] = useState('');
  const [valor,setValor] = useState(0);
  const [desc,setDesc] = useState('');
  const [foto,setFoto] = useState('');

  //Math.floor(Math.random() * 100)
  useEffect(() => {
    fetch('https://randomfox.ca/floof/')
    .then((resposta) => resposta.json())
    .then((post) =>{
      setRaposa(post.image);
    });
  },[]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((resposta) => resposta.json())
    .then((post) => {
      setProduto(post[indice].title);
      setValor(post[indice].price);
      setDesc(post[indice].description);
      setFoto(post[indice].image);
    });
  },[indice])

  const mudarIndice = () =>{
    setIndice(Math.floor(Math.random() * 20));
  }

  return (
    <div>
      <h2>Exemplos de APIs</h2>
      <div className="card text-center">
        <h3>Raposa Aleatória</h3>
        <p><img src={raposa} alt="Imagem da Raposa" height="200px"/></p>
      </div>
      <hr/>
      <div className="card text-center lead">
        <h3>Produtos</h3>
        <p>Produto: {produto}</p>
        <p>Preço: R${valor}</p>
        <p>Descrição: {desc}</p>
        <p><img src={foto} alt="" height="200px"/></p>
        <button onClick={(mudarIndice)} className="btn btn-danger">Mudar Produto</button>
      </div>
    </div>
  );
}

export default Teste7;
