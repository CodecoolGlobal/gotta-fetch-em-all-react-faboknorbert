import { useState, useEffect } from 'react';
import { fetchJsonData } from '../utility';
import { PokemonCard } from './PokemonCard';

function StarterPokemons({ userData, selectStarter }) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      console.log(userData);
      console.log(userData.starterOptions);
      const dataPromises = userData.starterOptions.map(url => fetchJsonData(url));
      const pokemonResponses = await Promise.all(dataPromises);
      setPokemonData(pokemonResponses);
    };

    fetchPokemonData();
  }, [userData]);
  return (
    <>
      <h2>{userData.username}, choose your first Pokémon</h2>
      <div className="pokemon-list">
        {pokemonData.map((pokemon, index) => (
          <button
            key={index}
            className={`card ${pokemon.name.toLowerCase()}`}
            onClick={() => selectStarter(userData.starterOptions[index])}>
            <PokemonCard
              image={pokemon.sprites.other.home.front_default}
              name={pokemon.name}
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default StarterPokemons;