import { useState } from 'react';
import NewGame from './Components/NewGame.jsx';
import Locations from './Components/Locations.jsx';
import Battle from './Components/Battle.jsx'
import './Styles/App.css'
import PokemonEncounter from './Components/PokemonEncounter';

function App() {
  const [userData, setUserData] = useState({
    "username": "",
    "pokemons": [],
    "chosenLocation": ""
  });
  const [stage, setStage] = useState("Battle");

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
      //   return <PokemonEncounter
        
      // />
      {setBattle}
      break;

      case 'Battle':
        return <Battle
        ownPokemon='https://pokeapi.co/api/v2/pokemon/pikachu'
        opponentPokemon='https://pokeapi.co/api/v2/pokemon/ditto'
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
