import { useEffect, useState } from 'react';
import {fetchJsonData, getRandomArbitrary} from '../utility.js'
import { PokemonCard } from './PokemonCard.jsx';
import '../Styles/Battle.css'
import { BattlePokemonCard } from './BattlePokemonCard.jsx';

function ProcessBattle(ownPokemon, ownSetter, opponentPokemon, opponentSetter){ 
    Attack(ownPokemon, opponentPokemon, opponentSetter);
    Attack(opponentPokemon, ownPokemon, ownSetter);
}

function Attack(attacker, defender, defenderSetter){
    const B = attacker.attack; //attacker attack
    const D = defender.defend; //defender defense
    const Z = getRandomArbitrary(217, 255);

    const damage = ((((2/5+2)*B*60/D)/50)+2)*Z/255;
    const newHp = defender.hp - Math.floor( damage);
    defenderSetter(pokemon => ({...pokemon, hp: newHp}));
}

function isDead(pokemon){
    return pokemon.stats[0].base_stat <= 0;
}

function Battle(props){
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
            const _ownPokemon = await getPokemon(props.ownPokemon);
            const _opponentPokemon = await getPokemon(props.opponentPokemon);

            _ownPokemon['attacker'] = _ownPokemon.speed > _opponentPokemon.speed;
            _opponentPokemon['attacker'] = _opponentPokemon.speed > _ownPokemon.speed;

            setOwnPokemon(_ownPokemon);       
            setOpponentPokemon(_opponentPokemon);
        }

        getPokemons();
    }, []);

    useEffect(() => {
        if(ownPokemon){
            if(ownPokemon.hp <= 0){
                console.log(opponentPokemon.name, 'wins!')
                props.setStage('Locations')
            }
    
            if(opponentPokemon.hp <= 0){
                console.log(ownPokemon.name, 'wins!')
                props.setStage('Locations')
            }
        }
        
    }, [ownPokemon, opponentPokemon]);

    return (
        <>
            <h1>BATTLE</h1>
            <div className='cardContainer'>
                {ownPokemon ? (<BattlePokemonCard name={ownPokemon.name} hp={ownPokemon.hp} image={ownPokemon.sprite}/>) : <p>Loading...</p>}
                {opponentPokemon ? (<BattlePokemonCard name={opponentPokemon.name} hp={opponentPokemon.hp} image={opponentPokemon.sprite}/>) : <p>Loading...</p>}
            </div>
            <button onClick={() => ProcessBattle(ownPokemon, setOwnPokemon, opponentPokemon, setOpponentPokemon)}>Attack!</button>
        </>
    );
}

export default Battle;