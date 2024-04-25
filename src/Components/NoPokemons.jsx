function NoPokemons ({ setStage }) {

    function handlePokemondAbsence() {
        setStage("Locations")
    }

    return (
        <div>
            <h3>No Pokémons to find here...</h3>
            <button onClick = {handlePokemondAbsence}>Search Elsewhere</button>
        </div>
    )
}

export default NoPokemons;