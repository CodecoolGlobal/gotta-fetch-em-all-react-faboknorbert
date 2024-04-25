import { useState } from 'react';
import { fetchJsonData } from '../utility';
import '../Styles/welcome.css'
import Welcome from './Welcome';
import StarterPokemons from './StarterPokemons';

function NewGame({ userData, setUserData }) {

  const [showStarterPokemon, setShowStarterPokemon] = useState(false);

  const handleNameSubmit = () => {
    setShowStarterPokemon(true);
  };

  function selectStarter(pokemonUrl) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonName = data.name;
        alert(`${userData.username} you've chosen ${pokemonName.toUpperCase()} as your starter Pokémon!`);

        setUserData(prevState => ({
          ...prevState,
          selectedStarter: pokemonName,
          pokemons: [...prevState.pokemons, pokemonUrl]
        }));
      });
  }

  return (
    <div className="new-game">
      {!showStarterPokemon ? (
        <Welcome
          setUserData={setUserData}
          handleUsernameChange={(e) => setUserData(prevState => ({ ...prevState, username: e.target.value }))}
          handleNameSubmit={handleNameSubmit}
        />
      ) : (
        <StarterPokemons 
          selectStarter={selectStarter}
          userData={userData}
        />
      )}
    </div>
  );
}

export default NewGame;