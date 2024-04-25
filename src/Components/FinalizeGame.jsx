function FinalizeGame({ userData, starterPokemonData, startGame }) {
  return (
    <div className="finalize-game">
      <h2>Alright, {userData.username}!</h2>
      <p>
        Your starter Pokémon: {starterPokemonData.name.toUpperCase()}
        <img src={starterPokemonData.sprites.front_default} alt={starterPokemonData.name} className="pokemon-icon" />
      </p>
      <button onClick={startGame}>Go and catch them all!</button>
    </div>
  );
}

export default FinalizeGame;