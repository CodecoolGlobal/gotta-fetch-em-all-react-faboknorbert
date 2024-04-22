function StarterPokémons({ pokemonList, selectStarter }) {
  return (
    <div className="starter-pokémon">
      <h2>Choose Your Starter Pokémon:</h2>
      <div className="pokémon-cards">
        {pokemonList.map((pokémon, index) => (
          <div
            key={index}
            className={`card ${pokémon.name.toLowerCase()}`}
            onClick={() => selectStarter(pokémon.url)}
          >
            {/* <img 
              src={pokémon.sprites?.other?.dream_world?.front_default} 
              alt={pokémon.name}
              className="pokémon-image"
            /> */}
            <span>{pokémon.name.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarterPokémons;