import { PokemonCard } from "./PokemonCard";

export function BattlePokemonCard({name, image, hp}){
    return (
        <div>
            <PokemonCard name={name} image={image}/>
            <h3>Health:{hp}</h3>
        </div>
    )
}