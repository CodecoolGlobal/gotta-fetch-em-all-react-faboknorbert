import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'
import PokemonEncounter from './Components/PokemonEncounter.jsx';

import './Styles/App.css'

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
      <PokemonEncounter
      url = "https://pokeapi.co/api/v2/location/2/"
      userData={userData}/>
    </div>
  );
}

export default App;
