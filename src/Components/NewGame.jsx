import { useState } from 'react';
import '../Styles/welcome.css';
import Welcome from './Welcome';
import StarterPokemons from './StarterPokemons';
import FinalizeGame from './FinalizeGame';

function NewGame({ userData, setUserData, setStage }) {
  const [showFinalizeGame, setShowFinalizeGame] = useState(false);
  const [starterPokemonData, setstarterPokemonData] = useState([]);

  const handleNameSubmit = () => {
    setShowFinalizeGame(true);
  };

  function selectStarter(pokemonUrl) {
    console.log(pokemonUrl);
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        
        setUserData(prevState => ({
          ...prevState,
          pokemons: [...prevState.pokemons, pokemonUrl]
        }));
        setstarterPokemonData(data)
        handleNameSubmit();
      });
  }

  const startGame = () => {
    setStage("Locations");
    console.log(userData);
  };

  return (
    <div className="new-game">
      {!showFinalizeGame ? (
        <Welcome
          setUserData={setUserData}
          handleUsernameChange={(e) => setUserData(prevState => ({ ...prevState, username: e.target.value }))}
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
          setstarterPokemonData={setstarterPokemonData}
        />
      )}
    </div>
  );
}

export default NewGame;