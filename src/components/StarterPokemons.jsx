import { useState, useEffect } from 'react';
import { fetchJsonData } from '../utility';
import { PokemonCard } from './PokemonCard';
import userData from '../data.json';

function StarterPokemons({ userName, selectStarter }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [userState, setUserState] = useState([userData]);
  console.log(userState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const dataPromises = userData.starterOptions.map(url => fetchJsonData(url));
      const pokemonResponses = await Promise.all(dataPromises);
      setPokemonData(pokemonResponses);
    };

    fetchPokemonData();
  }, [userState]);

  return (
    <>
      <h2>{userName}, choose your first animal</h2>
      <div className="pokemon-list">
        {pokemonData.map((pokemon, index) => (
          <button
            key={index}
            className={`card ${pokemon.name.toLowerCase()}`}
            onClick={() => selectStarter(userData.starterOptions[index])}>
            <PokemonCard
              image={pokemon.sprites.other.home.front_default} //better image: sprites.other.home.front_default
              name={pokemon.name}
            />
          </button>
        ))}
      </div>
    </>
  );
}

export default StarterPokemons;