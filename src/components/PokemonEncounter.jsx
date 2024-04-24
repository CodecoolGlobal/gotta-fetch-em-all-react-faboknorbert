import {useState, useEffect} from "react";

async function fetchData (fetchURL) {
    const response = await fetch(fetchURL);
    const data = await response.json();
    return data;
}

async function fetchAreaDatas (url) {
    const locationData = await fetchData(url);
    const pokemonEncounter = await Promise.all(locationData.areas.map(async area => {
        const areaData = await fetchData(area.url);
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

function PokemonEncounter ({ url }) {

    const [randomPokemon, setRandomPokemon] = useState(null);

    useEffect(() => {
        
        async function pickRandomPokemon(url) {
            const pokemonList = await collectPokemons(url)
            const sortedList = [... new Set(pokemonList)];
            const randomPokemon = sortedList[Math.floor(Math.random() * sortedList.length)];
            setRandomPokemon(randomPokemon);
        }

        pickRandomPokemon(url);

    }, []);

    return (
        <div>
            {randomPokemon}
        </div>
    )
}

export default PokemonEncounter;