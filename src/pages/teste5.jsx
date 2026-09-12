import React, { useState, useEffect } from 'react';

function Teste5() {
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resposta) => resposta.json())
      .then((post) => {
        setTitulo(post[0].title);
        setCorpo(post[0].body);
      });
    
      
  }, []);

  return (
    <div>
      <h2>Testando APIs</h2>

      <div>
        <h3>1 - JSONPlaceholder</h3>
        <h4>- Post -</h4>
        <h5>Diferentes posts</h5>
        <h6>{titulo}</h6>
        <p>{corpo}</p>
      </div>
    </div>
  );
}

export default Teste5;
