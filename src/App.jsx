import "./App.css";
import "./AppSP.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/home.page2";

//Individual types and weaknesses pages may not be needed.
//import PokemonTypes from "./pages/pokemontypes.page"
//import PokemonWeaknesses from './pages/pokemonweaknesses.page';

import SinglePoketypePage from "./pages/singlepagepoketype.page";

function App() {
  let [pokemon, setPokemon] = useState([]);

  function fetchPokeName() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((pokemon) => setPokemon(pokemon.pokemon))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchPokeName();
  }, []);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"pokemon-types"}>Pokemon Types</NavLink>
          </li>
          {/*<li>
            <NavLink to={"pokemon-weaknesses"}>Pokemon Weaknesses</NavLink>
           </li>*/}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage pokemon={pokemon} />} />
        {/* <Route path="pokemon-types" element={<PokemonTypes />} /> */}
        <Route
          path="pokemon/:id"
          element={<SinglePoketypePage pokemon={pokemon} />}
        />
        {/*<Route path="pokemon-weaknesses" element={<PokemonWeaknesses />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
