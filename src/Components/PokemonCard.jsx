export function PokemonCard({image, name}){
    return (
        <div>
            <img src={image}></img>
            <h2>{name}</h2>
        </div>
    )
}