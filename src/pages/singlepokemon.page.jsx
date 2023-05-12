import { useState, useEffect } from "react";

function PokemonPage(props) {
    let [list, setList] = useState([])

    function getPokemon() {
        fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
        .then((res) => res.json())
        .then((pokemon) => setList(pokemon.pokemon))
        .catch((err) => console.error(err))
    }

    useEffect(() => {
        getPokemon();
    }, [])

    let pokemon = list.map((pokemon) => {
        console.log("hey", pokemon)
    })

    return (
        <div>
            <div>
                <button>Next</button>
            </div>
            <div>
                <p>{pokemon}</p>
            </div>
        </div>
    )
}

export default PokemonPage;