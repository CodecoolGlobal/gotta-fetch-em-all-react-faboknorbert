import {useState, useEffect} from "react";
import { fetchJsonData } from "../utility";
import { PokemonCard } from './PokemonCard.jsx';
import PickBattlingPokemon from "./PickBattlingPokemon.jsx";

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

function PokemonEncounter ({ userData, setStage, setBattleData, }) {

    const [pokemonURL, setPokemonURL] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    const [isFighting, setIsFighting] = useState(false);

    useEffect(() => {
        
        async function pickRandomPokemon(url) {
            const pokemonList = await collectPokemons(url)
            if (pokemonList.length <= 0) setStage("noPokemons")
            const sortedList = [... new Set(pokemonList)];
            const randomPokemon = sortedList[Math.floor(Math.random() * sortedList.length)];
            setPokemonURL(randomPokemon);
            const fetchedPokemon = await fetchJsonData(randomPokemon);
            setPokemonData(fetchedPokemon);
        }

        pickRandomPokemon(userData.chosenLocation);
    }, []);

    function isReoccuringPokemon() {
        if (userData.pokemons.includes(pokemonURL)) return true;
        return false;
    }

    function handleFight() {
        setBattleData(prevState => ({
            ...prevState,
            opponentPokemon: pokemonURL,
          }));
        setIsFighting(true)
    }

    function handleRetreat() {
        setStage("Locations")
    }

    function Encounter() {
        return <div className="encounter">
            <PokemonCard
            image={pokemonData.sprites.other.home.front_default}
            name={pokemonData.name}/>
            {isReoccuringPokemon() ? (
                <h2>Looks like we already caught this Pokémon, do you still wish to fight?</h2>
            ) : (
                <h2>Are you sure you want to battle this Pokémon?</h2>
            )}
            <button onClick = {handleFight}>Fight</button>
            <button onClick = {handleRetreat}>Run Away</button>
        </div>
    }

    return (
        <>
            {isFighting ? (
                <PickBattlingPokemon
                userData = { userData }
                setStage = {setStage}
                setBattleData = { setBattleData }/>
            ) : (
                pokemonData ? (<Encounter/>) : (<h2>Ambushed!</h2>)
            )} 
        </>
    )
}

export default PokemonEncounter;