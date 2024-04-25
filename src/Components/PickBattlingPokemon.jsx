import { useState, useEffect } from "react";
import { fetchJsonData } from "../utility";
import { PokemonCard } from "./PokemonCard";

function PickBattlingPokemon ({ userData, setBattleData, setStage }) {

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
          const dataPromises = userData.pokemons.map(url => fetchJsonData(url));
          const pokemonResponses = await Promise.all(dataPromises);
          setPokemonData(pokemonResponses);
        };
    
        fetchPokemonData();
      }, [userData]);

      function handleDecision(pokemonURL) {
        setBattleData(prevState => ({
          ...prevState,
          ownPokemon: pokemonURL,
        }));
        setStage("Battle")
      }

      return (
        <>
          <h2>Which Pokémon of yours will you use to battle?</h2>
          <div className="pokemon-list">
            {pokemonData.map((pokemon, index) => (
              <button
                key={index}
                className={`card ${pokemon.name.toLowerCase()}`}
                onClick={() => handleDecision(userData.pokemons[index])}>
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

export default PickBattlingPokemon;