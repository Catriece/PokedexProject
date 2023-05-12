import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./pages/home.page"
import Pokemon from "./pages/pokemon.page"
import PokemonPage from "./pages/singlepokemon.page"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"pokemon"}>Pokemon</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
