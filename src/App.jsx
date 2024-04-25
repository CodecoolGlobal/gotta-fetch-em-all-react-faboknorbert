import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'
import PokemonEncounter from './Components/PokemonEncounter.jsx';

import './Styles/App.css'
import { Results } from './Components/Results.jsx';

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "pokemons": [],
    "chosenLocation": ""
  });
  const [stage, setStage] = useState("NewGame");
  const [battleData, setBattleData] = useState({
    "ownPokemon": "",
    "opponentPokemon": "",
    "hasWon": false
  })

  function setBattle()
  {
    setStage('Battle');
  }

  function chooseStage(){
    switch(stage) {
      case 'NewGame':
        return <NewGame 
          userData={userData}
          setUserData={setUserData}
          setStage={setStage}
        />

      case 'Locations':
        return <Locations
        setUserData={setUserData}
        setStage={setStage}
      />
      
      case 'randomEncounter':
        return <PokemonEncounter
        userData = {userData}
        setStage = {setStage}
        setBattleData = {setBattleData}
        />

      case 'Battle':
        return <Battle
        ownPokemon = {battleData.ownPokemon}
        opponentPokemon = {battleData.opponentPokemon}
        setUserData = {setUserData}
        setBattleData = {setBattleData}
        setStage = {setStage}
      />

      case 'Results':
        return <Results
        ownPokemonUrl = {battleData.ownPokemon}
        opponentPokemonUrl = {battleData.opponentPokemon}
        hasWin = {battleData.hasWon}
        setStage = {setStage}
        />
    } 
  }

  return (
    <div className='App'>
      {chooseStage()}
    </div>
  );
}

export default App;
