import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'

import './Styles/App.css'
import PokemonEncounter from './components/PokemonEncounter';

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "pokemons": [],
    "chosenLocation": ""
  });
  const [stage, setStage] = useState("NewGame");

  return (
    <div className='App'>
      {stage === "NewGame" && (
        <NewGame 
          userData={userData}
          setUserData={setUserData}
          setStage={setStage}
        />
      )}

      {stage === "Locations" && (
        <Locations
          setStage={setStage}
          setUserData={setUserData}
        />
      )}
    </div>
  );
}

export default App;
