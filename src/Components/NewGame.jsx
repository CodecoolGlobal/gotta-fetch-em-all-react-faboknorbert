import { useState } from 'react';
import '../Styles/welcome.css';
import Welcome from './Welcome';
import StarterPokemons from './StarterPokemons';
import FinalizeGame from './FinalizeGame';

function NewGame({ userData, onChoosePokemon, onSetUsername, onGameStarted }) {
  const [showFinalizeGame, setShowFinalizeGame] = useState(false);
  const [starterPokemonData, setStarterPokemonData] = useState([]);

  const handleNameSubmit = () => {
    setShowFinalizeGame(true);
  };

  function selectStarter(pokemonUrl) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        
        // setUserData(prevState => ({
        //   ...prevState,
        //   pokemons: [...prevState.pokemons, pokemonUrl]
        // }));
        onChoosePokemon(pokemonUrl);
        setStarterPokemonData(data)
        handleNameSubmit();
      });
  }

  const startGame = () => {
    onGameStarted();
  };

  return (
    <div className="new-game">
      {!showFinalizeGame ? (
        <Welcome
          userData={userData}
          setUserData={setUserData}
          handleUsernameChange={(e) => onSetUsername(e.target.value) /* setUserData(prevState => ({ ...prevState, username: e.target.value })) */}
          handleNameSubmit={handleNameSubmit}
        />
      ) : userData.pokemons.length ? (
        <FinalizeGame
          userData={userData}
          starterPokemonData={starterPokemonData}
          startGame={startGame}
        />
      ) : (
        <StarterPokemons 
          selectStarter={selectStarter}
          userData={userData}
          starterPokemonData={starterPokemonData}
          setStarterPokemonData={setStarterPokemonData}
        />
      )}
    </div>
  );
}

export default NewGame;