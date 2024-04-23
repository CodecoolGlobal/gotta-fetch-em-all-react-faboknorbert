import { useState } from 'react'
import './Styles/welcome.css'
import Welcome from './components/Welcome';
import StarterPokemons from './components/StarterPokemons';
import { fetchJsonData, getData, saveData } from './utility';

function App() {
  const [username, setUsername] = useState('');
  const [showStarterPokemon, setShowStarterPokemon] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  const handleNameSubmit = async () => {
    setShowStarterPokemon(true);

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=7');
    const data = await response.json();

    const selectedPokemon = [data.results[0], data.results[3], data.results[6]];
    setPokemonList(selectedPokemon);

    const existingData = await fetchJsonData();
    const updatedData = {
      ...existingData,
      username,
      selectedPokemon: selectedPokemon.map(pokemon => pokemon.name),
    };
    await saveData(updatedData);
  };

  function selectStarter(pokemonUrl, username) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonName = data.name;
        alert(`Welcome, ${username}! You've chosen ${pokemonName.toUpperCase()} as your starter Pokémon!`);

        const existingData = await fetchJsonData();
        const updatedData = {
          ...existingData,
          selectedStarter: pokemonName,
        };
        await saveData(updatedData);
      });
  }

  return (
    <div className='App'>
      {showStarterPokemon ? (
        <StarterPokemons
          pokemonList={pokemonList}
          selectStarter={(pokemonUrl) => selectStarter(pokemonUrl, username)}
        />
      ) : (
        <Welcome
          setUsername={setUsername}
          handleNameSubmit={handleNameSubmit}
        />
      )}
    </div>
  );
}

export default App
