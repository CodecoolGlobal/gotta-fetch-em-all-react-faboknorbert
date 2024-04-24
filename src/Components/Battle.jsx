import { useEffect, useState } from 'react';
import {fetchJsonData, getRandomArbitrary} from '../utility.js'
import { PokemonCard } from './PokemonCard.jsx';
import '../Styles/Battle.css'

function Attack(attacker, defender){
    const B = attacker.stats[1].base_stat; //attacker attack
    const D = defender.stats[2].base_stat; //defender defense
    const Z = getRandomArbitrary(217, 255);

    const damage = ((((2/5+2)*B*60/D)/50)+2)*Z/255;
    defender[0].base_stat -= damage;
}

function ProcessBattle(firstPokemon, secondPokemon){
    
}

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
                {ownPokemon ? (<PokemonCard name={ownPokemon.name} hp={ownPokemon.stats[0].base_stat} image={ownPokemon.sprites.other.home.front_default}/>) : <p>Loading...</p>}
                {opponentPokemon ? (<PokemonCard name={opponentPokemon.name} hp={opponentPokemon.stats[0].base_stat} image={opponentPokemon.sprites.other.home.front_default}/>) : <p>Loading...</p>}
            </div>
            <button>Begin!</button>
        </>
    );
}

export default Battle;