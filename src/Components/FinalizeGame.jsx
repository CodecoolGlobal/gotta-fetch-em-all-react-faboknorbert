function FinalizeGame({ userData, startGame }) {
  return (
    <div className="finalize-game">
      <h2>Alright, {userData.username}!</h2>
      <p>
        Your starter Pokémon: {userData.selectedStarter.name.toUpperCase()}
        <img src={userData.selectedStarter.sprites.front_default} alt={userData.selectedStarter.name} className="pokemon-icon" />
      </p>
      <button onClick={startGame}>Go and catch them all!</button>
    </div>
  );
}

export default FinalizeGame;