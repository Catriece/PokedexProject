import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json/"


function SinglePoketypePage({pokemon}) {
    //let [pokemon, setPokemon] = useState({});

    // function getPokeType() {
    //     fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json/${pokemon.pokemon.type}`)
    //     .then((res) => res.json())
    //     .then((pokemon) => setPokemon(pokemon.pokemon))
    //     .catch((err) => console.error(err));
    // }

    // useEffect(() => {
    //     getPokeType();
    // }, []);

    let { id } = useParams();
    let indivPokemon = pokemon[Number(id)]
    console.log(pokemon)
    console.log("testing", id)
    console.log("testing", indivPokemon)

    return (
        <div>
            <div>
                <img src={`${indivPokemon.img}`} alt={`${indivPokemon.name} Poster`} />
            </div>
            <div>
                <h1>{indivPokemon.name}</h1>
                
                
            </div>
        </div>
    )

}

export default SinglePoketypePage;