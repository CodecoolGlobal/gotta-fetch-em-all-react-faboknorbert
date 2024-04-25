import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from 'react';
import {fetchJsonData} from '../utility.js'

export function Results({ownPokemonUrl, opponentPokemonUrl, hasWin, setStage}){
    const [ownPokemon, setOwnPokemon] = useState(null);
    const [opponentPokemon, setOpponentPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon(pokemonUrl){
            const pokemon = await fetchJsonData(pokemonUrl);
            return {
                name: pokemon.name,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defend: pokemon.stats[2].base_stat,
                speed:  pokemon.stats[5].base_stat,
                sprite: pokemon.sprites.other.home.front_default
            };
        }

        async function getPokemons(){
            const _ownPokemon = await getPokemon(ownPokemonUrl);
            const _opponentPokemon = await getPokemon(opponentPokemonUrl);

            _ownPokemon['attacker'] = _ownPokemon.speed > _opponentPokemon.speed;
            _opponentPokemon['attacker'] = _opponentPokemon.speed > _ownPokemon.speed;

            setOwnPokemon(_ownPokemon);       
            setOpponentPokemon(_opponentPokemon);
        }

        getPokemons();
    }, []);

    function displayLose(){
        return (
        <div>
            <h1>You lost, This cute pokemon died because of you!</h1>
            {ownPokemon ? (<PokemonCard name={ownPokemon.name} image={ownPokemon.sprite}/>) : (<p>Loading...</p>)}
        </div>
        );
    }

    function displayWin(){
        return (
            <div>
                <h1>Congratulations, You Won!</h1>
                <h2>From now, you can use {opponentPokemon ? (opponentPokemon.name) : ('Loading...')} in your battles!</h2>
                {opponentPokemon ? (<PokemonCard name={opponentPokemon.name} image={opponentPokemon.sprite}/>) : (<p>Loading...</p>)}
            </div>
        );
    }

    return (
        <div>
            {hasWin ?
                (displayWin()) : (displayLose())         
            }
            <button onClick={() => setStage('Locations')}>Back To Map</button>
        </div>
    )
}