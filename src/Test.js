import React, { useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const [data, setData] = React.useState([]);
  const [x, setX] = React.useState(0);
  useEffect(() => {
    axios.get(url)
  .then(response => {
    console.log(response.data); // API'den dönen veriler
  })
  .catch(error => {
    console.error('Hata:', error);
  });
  }, [x]);
  
  function arttir() {
    setX(x + 1);
  }
  return <div>
    
    <button class="text-3xl bg-blue-500" onClick={arttir}>arttır</button>
    <h1 class="text-3xl">{x}</h1>
  </div>;
};

export default Test;
