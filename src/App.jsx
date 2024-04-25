import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'
import PokemonEncounter from './Components/PokemonEncounter.jsx';
import NoPokemons from "./Components/NoPokemons.jsx"

import './Styles/App.css'

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "pokemons": [],
    "chosenLocation": ""
  });
  const [stage, setStage] = useState("NewGame");
  const [battleData, setBattleData] = useState({
    "pickedPokemon": "",
    "opposingPokemon": "",
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

      case 'noPokemons':
        return <NoPokemons
        setStage = {setStage}/>

      case 'Battle':
        return <Battle
        ownPokemon = {battleData.pickedPokemon}
        opponentPokemon = {battleData.opposingPokemon}
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
