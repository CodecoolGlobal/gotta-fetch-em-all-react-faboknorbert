import { useState } from "react";
import NewGame from "./Components/NewGame.jsx";
import Locations from "./Components/Locations.jsx";
import Battle from "./Components/Battle.jsx";
import PokemonEncounter from "./Components/PokemonEncounter.jsx";
import NoPokemons from "./Components/NoPokemons.jsx";

import "./Styles/App.css";
import { Results } from "./Components/Results.jsx";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    pokemons: [],
    chosenLocation: "",
  });
  const [stage, setStage] = useState("NewGame");
  const [battleData, setBattleData] = useState({
    ownPokemon: "",
    opponentPokemon: "",
    hasWon: false,
  });
  // const person = {
  //   name: "John",
  //   birthDate: new Date()
  // };
  // const myComponent = <MyComponent {...person}></MyComponent>

  function chooseStage() {
    switch (stage) {
      case "NewGame":
        return (
          <NewGame
            userData={userData}
            onChoosePokemon={(pokemonUrl) => {
              setUserData((prevState) => ({
                ...prevState,
                pokemons: [...prevState.pokemons, pokemonUrl],
              }));
            }}
            onSetUsername={(username) => {
              setUserData(prevState => ({ ...prevState, username }))
            }}
            onGameStarted={() => setStage("Locations")}
          />
        );

      case "Locations":
        return (
          <Locations
            userData={userData}
            setUserData={setUserData}
            setStage={setStage}
          />
        );

      case "randomEncounter":
        return (
          <PokemonEncounter
            userData={userData}
            setStage={setStage}
            setBattleData={setBattleData}
          />
        );

      case "noPokemons":
        return <NoPokemons setStage={setStage} />;

      case "Battle":
        return (
          <Battle
            userData={userData}
            ownPokemon={battleData.ownPokemon}
            opponentPokemon={battleData.opponentPokemon}
            setUserData={setUserData}
            setBattleData={setBattleData}
            setStage={setStage}
          />
        );

      case "Results":
        return (
          <Results
            userData={userData}
            ownPokemonUrl={battleData.ownPokemon}
            opponentPokemonUrl={battleData.opponentPokemon}
            hasWin={battleData.hasWon}
            setStage={setStage}
          />
        );
    }
  }

  return <div className="App">{chooseStage()}</div>;
}

export default App;
