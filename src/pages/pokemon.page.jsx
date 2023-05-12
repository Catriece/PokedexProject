import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Pokemon() {
    let [names, setNames] = useState([])
   

    function fetchPokeName() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((res) => res.json())
        .then((pokemon) => setNames(pokemon.pokemon.names))
        .catch((err) => console.error(err))
    }

    useEffect(() => {
        fetchPokeName();
    }, [])

    console.log(names);

    return (
        <div>
            <div>
                <ul>
                {names.map((pokemon) => {
                    return <label><Link to={`/pokemon/${pokemon.id}`}><img src={`${pokemon.img}`} alt={`${pokemon.name} Poster`} /></Link>
                    <li key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link></li></label>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Pokemon;