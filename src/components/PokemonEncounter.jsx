import {useState, useEffect} from "react";
import { fetchJsonData } from "../utility";
import { PokemonCard } from './PokemonCard';
import PickBattlingPokemon from "./PickBattlingPokemon";

async function fetchAreaDatas (url) {
    const locationData = await fetchJsonData(url);
    const pokemonEncounter = await Promise.all(locationData.areas.map(async area => {
        const areaData = await fetchJsonData(area.url);
        return areaData["pokemon_encounters"];
   }));
   return pokemonEncounter;
}

async function collectPokemons(url) {
    const pokemonArray = [];
    const pokemonEncounters = await fetchAreaDatas(url);

    pokemonEncounters.forEach((encounter) => {
        encounter.forEach((mon) => {
            pokemonArray.push(mon.pokemon.url);
        })
    })
    return pokemonArray;
}

function PokemonEncounter ({ url, userData }) {

    const [pokemonURL, setPokemonURL] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const [isFighting, setIsFighting] = useState(false);

    useEffect(() => { // fetches a random Pokemon from the area
        
        async function pickRandomPokemon(url) {
            const pokemonList = await collectPokemons(url)
            const sortedList = [... new Set(pokemonList)];
            const randomPokemon = sortedList[Math.floor(Math.random() * sortedList.length)];
            setPokemonURL(randomPokemon);
            const fetchedPokemon = await fetchJsonData(randomPokemon);
            setPokemonData(fetchedPokemon);
        }

        pickRandomPokemon(url);
    }, [url]);

    function handleReoccuringPokemon() {
        if (userData.pokemons.includes(pokemonURL)) return true;
        return false;
    }

    function handleRetreat() {
        console.log("RETREAT")
    }

    return (
        <div>
            {isFighting ? (
                <PickBattlingPokemon
                userData={ userData }/>
            ) : (
                <div>
                {pokemonData ? (
                        <div>
                            <PokemonCard
                            image={pokemonData.sprites.other.home.front_default}
                            name={pokemonData.name}/>
                            {handleReoccuringPokemon() ? (
                                <div>
                                    <h3>Looks like we already caught this Pokémon, do you still wish to fight?</h3>
                                </div>
                            ) : (
                                <div>
                                    <h3>Are you sure you want to battle this Pokémon?</h3>
                                </div>
                            )}
                            <button onClick = {()=> setIsFighting(true)}>Fight</button>
                            <button onClick = {handleRetreat}>Run Away</button>
                        </div>
                    ) : (
                        <h2>Ambushed!</h2>
                    )}
                </div>
            )} 
        </div>
    )
}

export default PokemonEncounter;