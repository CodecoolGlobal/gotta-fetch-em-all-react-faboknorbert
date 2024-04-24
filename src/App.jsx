import { useState } from 'react'
import Battle from './Components/Battle.jsx'
import './Styles/App.css'

function App() {
  return (
    <div>
      <Battle ownPokemon='https://pokeapi.co/api/v2/pokemon/pikachu' opponentPokemon='https://pokeapi.co/api/v2/pokemon/ditto' />
    </div>
  )
}

export default App
