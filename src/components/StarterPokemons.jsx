function StarterPokemons({ pokemonList, selectStarter }) {
  return (
    <div className="starter-pokemon">
      <h2>Choose Your Starter Pokémon:</h2>
      <div className="pokemon-cards">
        {pokemonList.map((pokemon, index) => (
          <div
            key={index}
            className={`card ${pokemon.name.toLowerCase()}`}
            onClick={() => selectStarter(pokemon.url)}
          >
            {/* <img 
              src={pokemon.sprites?.other?.dream_world?.front_default} 
              alt={pokemon.name}
              className="pokemon-image"
            /> */}
            <span>{pokemon.name.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarterPokemons;