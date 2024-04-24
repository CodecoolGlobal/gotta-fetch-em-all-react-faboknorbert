import { useEffect, useState } from 'react';
import {fetchJsonData} from '../utility.js'
import { PokemonCard } from './PokemonCard.jsx';
import '../Battle.css'

function Battle(props){
    const [ownPokemon, setOwnPokemon] = useState(null);
    const [opponentPokemon, setOpponentPokemon] = useState(null);

    useEffect(() => {
        async function getPokemons(){
            const _ownPokemon = await fetchJsonData(props.ownPokemon);
            setOwnPokemon(_ownPokemon);
            setOpponentPokemon(await fetchJsonData(props.opponentPokemon));
        }

        getPokemons();
    }, []);

    return (
        <>
            <h1>BATTLE</h1>
            <div className='cardContainer'>
                {ownPokemon ? (<PokemonCard name={ownPokemon.name} image={ownPokemon.sprites.front_default}/>) : <p>Loading...</p>}
                {opponentPokemon ? (<PokemonCard name={opponentPokemon.name} image={opponentPokemon.sprites.front_default}/>) : <p>Loading...</p>}
            </div>
        </>
    );
}

export default Battle;