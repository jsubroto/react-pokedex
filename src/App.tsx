import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h1>Pokédex</h1>
    </div>
  );
}

export default App;
