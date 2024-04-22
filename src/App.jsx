import { useState } from 'react'
import './Styles/welcome.css'
import Welcome from './components/Welcome';
import StarterPokémons from './components/StarterPokémons';

function App() {
  const [username, setUsername] = useState('');
  const [showStarterPokémon, setShowStarterPokémon] = useState(false);
  const [pokémonList, setPokémonList] = useState([]);
  //const [pageState, setPageState] = useState('welcome');

  const handleNameSubmit = async () => {
    setShowStarterPokémon(true);

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=7');
    const data = await response.json();

    const selectedPokémon = [data.results[0], data.results[3], data.results[6]];
    setPokémonList(selectedPokémon);
  };

  function selectStarter(pokémonUrl, username) {
    fetch(pokémonUrl)
      .then((response) => response.json())
      .then((data) => {
        const pokémonName = data.name;
        alert(`Welcome, ${username}! You've chosen ${pokémonName.toUpperCase()} as your starter Pokémon!`);
      });
  }

  return (
    <div className='App'>
      {showStarterPokémon ? (
        <StarterPokémons
          pokemonList={pokémonList}
          selectStarter={(pokémonUrl) => selectStarter(pokémonUrl, username)}
        />
      ) : (
        <Welcome
          setUsername={setUsername}
          handleNameSubmit={handleNameSubmit}
        />
      )}
    </div>
  )
}

export default App
