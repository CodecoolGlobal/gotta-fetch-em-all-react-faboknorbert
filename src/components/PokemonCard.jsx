export function PokemonCard({image, name, hp}){
    return (
        <div>
            <img src={image}></img>
            <h2>{name}</h2>
            <h3>Health: {hp}</h3>
        </div>
    )
}