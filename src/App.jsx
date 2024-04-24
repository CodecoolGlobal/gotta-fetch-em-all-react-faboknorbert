import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'
import './Styles/App.css'

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "starterOptions": ["https://pokeapi.co/api/v2/pokemon/1", "https://pokeapi.co/api/v2/pokemon/4", "https://pokeapi.co/api/v2/pokemon/7"],
    "pokemons": []
  });
  const [stage, setStage] = useState("NewGame");

  const moveToLocations = () => {
    setStage("Locations");
  };

  return (
    <div className='App'>
      {stage === "NewGame" && (
        <NewGame 
          userData={userData}
          setUserData={setUserData}
          moveToLocations={moveToLocations}
        />
      )}

      {stage === "Locations" && (
        <Locations />
      )}
    </div>
  );
}

export default App;