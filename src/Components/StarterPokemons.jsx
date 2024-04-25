import { useState, useEffect } from 'react';
import { fetchJsonData } from '../utility';
import { PokemonCard } from './PokemonCard';

function StarterPokemons({ userData, selectStarter, starterPokemonData, setStarterPokemonData }) {
  const [isLoading, setIsLoading] = useState(true);
  const starterOptions = [
    "https://pokeapi.co/api/v2/pokemon/1",
    "https://pokeapi.co/api/v2/pokemon/4",
    "https://pokeapi.co/api/v2/pokemon/7"
  ]

  useEffect(() => {
    const fetchPokemonData = async () => {
      const dataPromises = starterOptions.map(url => fetchJsonData(url));
      const pokemonResponses = await Promise.all(dataPromises);
      setStarterPokemonData(pokemonResponses);
      setIsLoading(false);
    };

    fetchPokemonData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Welcome {userData.username}! Choose your first Pokémon</h2>
      <div className="pokemon-list">
        {starterPokemonData.map((pokemon, index) => (
          <button
            key={index}
            className={`card ${pokemon.name.toLowerCase()}`}
            onClick={() => selectStarter(starterOptions[index])}>
            <PokemonCard
              image={pokemon.sprites.other.home.front_default}
              name={pokemon.name.toUpperCase()}
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default StarterPokemons;