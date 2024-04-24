import { useState } from 'react'
import './App.css'
import PokemonEncounter from './components/PokemonEncounter';

function App() {
  const [pageState, setPageState] = useState('welcome');

  return (
    <div>
      <PokemonEncounter
      url = "https://pokeapi.co/api/v2/location/2/"/>
    </div>
  )
}

export default App;
