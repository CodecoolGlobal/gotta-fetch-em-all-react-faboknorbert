import { useState, useEffect } from 'react';
import './Styles/welcome.css';
import Welcome from './components/Welcome';
import StarterPokemons from './components/StarterPokemons';
import userData from './data.json';

function App() {
  const [username, setUsername] = useState(userData.username || '');
  const [showStarterPokemon, setShowStarterPokemon] = useState(false);
  const [userDataState, setUserDataState] = useState(userData);

  const handleNameSubmit = () => {
    setShowStarterPokemon(true);

    setUserDataState(prevState => ({
      ...prevState,
      username,
    }));
  };

  function selectStarter(pokemonUrl) {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonName = data.name;
        alert(`Welcome, ${username}! You've chosen ${pokemonName.toUpperCase()} as your starter Pokémon!`);

        setUserDataState(prevState => ({
          ...prevState,
          selectedStarter: pokemonName,
        }));
      });
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userDataState));
  }, [userDataState]);

  return (
    <div className='App'>
      {showStarterPokemon ? (
        <StarterPokemons 
          username={username}
          selectStarter={selectStarter}
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

export default App;