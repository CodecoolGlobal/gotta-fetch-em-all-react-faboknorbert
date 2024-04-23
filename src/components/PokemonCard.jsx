export function PokemonCard({image, name}){
    return (
        <>
            <img src={image}></img>
            <h2>{name}</h2>
        </>
    )
}