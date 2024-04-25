import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Battle from './Components/Battle.jsx'

import './Styles/App.css
import PokemonEncounter from './components/PokemonEncounter';

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "starterOptions": ["https://pokeapi.co/api/v2/pokemon/1", "https://pokeapi.co/api/v2/pokemon/4", "https://pokeapi.co/api/v2/pokemon/7"],
    "pokemons": []
  });

  return (
    <div className='App'>
      <NewGame 
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
}

export default App;
