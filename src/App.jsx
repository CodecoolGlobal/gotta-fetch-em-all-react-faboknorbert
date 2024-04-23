import { useState } from 'react'
import Battle from './Components/Battle.jsx'
import './App.css'

function App() {
  const [pageState, setPageState] = useState('welcome');

  return (
    <div>
      <Battle ownPokemon='https://pokeapi.co/api/v2/pokemon/pikachu' opponentPokemon='https://pokeapi.co/api/v2/pokemon/ditto' />
    </div>
  )
}

export default App
