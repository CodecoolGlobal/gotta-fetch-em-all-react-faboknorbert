import { useState } from 'react';
import './Styles/welcome.css';
import Welcome from './Components/Welcome.jsx'
import StarterPokemons from './Components/StarterPokemons.jsx';
import Battle from './Components/Battle.jsx'
import './Styles/App.css'
import PokemonEncounter from './Components/PokemonEncounter.jsx';

function App() {
  const [showStarterPokemon, setShowStarterPokemon] = useState(false);
  const [userData, setUserData] = useState({
    "username": "",
    "starterOptions": ["https://pokeapi.co/api/v2/pokemon/1", "https://pokeapi.co/api/v2/pokemon/4", "https://pokeapi.co/api/v2/pokemon/7"],
    "pokemons": ["https://pokeapi.co/api/v2/pokemon/ditto"]
  });

  
  const handleNameSubmit = () => {
    setShowStarterPokemon(true);
    
    setUserData(prevState => ({
      ...prevState,
      username: userData.username,
    }));
  };

  function selectStarter(pokemonUrl) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonName = data.name;
        alert(`Welcome, ${userData.username}! You've chosen ${pokemonName.toUpperCase()} as your starter Pokémon!`);

        setUserData(prevState => ({
          ...prevState,
          selectedStarter: pokemonName,
          pokemons: [...prevState.pokemons, pokemonUrl]
        }));
      });
  }

  return (
    <div className='App'>
      {showStarterPokemon ? (
        <StarterPokemons 
          selectStarter={selectStarter}
          userData={userData}
        />
      ) : (
        <Welcome
          setUserData={setUserData}
          handleNameSubmit={handleNameSubmit}
        />
      )}
    </div> 
  );
}

export default App;
