import { useState } from 'react';
import '../Styles/welcome.css';
import Welcome from './Welcome';
import StarterPokemons from './StarterPokemons';
import FinalizeGame from './FinalizeGame';

function NewGame({ userData, setUserData, moveToLocations }) {
  const [showFinalizeGame, setShowFinalizeGame] = useState(false);

  const handleNameSubmit = () => {
    setShowFinalizeGame(true);
  };

  function selectStarter(pokemonUrl) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        
        setUserData(prevState => ({
          ...prevState,
          selectedStarter: data,
          pokemons: [...prevState.pokemons, pokemonUrl]
        }));

        handleNameSubmit();
      });
  }

  const startGame = () => {
    moveToLocations();
  };

  return (
    <div className="new-game">
      {!showFinalizeGame ? (
        <Welcome
          setUserData={setUserData}
          handleUsernameChange={(e) => setUserData(prevState => ({ ...prevState, username: e.target.value }))}
          handleNameSubmit={handleNameSubmit}
        />
      ) : userData.selectedStarter ? (
        <FinalizeGame
          userData={userData}
          startGame={startGame}
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