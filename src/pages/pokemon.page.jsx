import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { filterPokemonByType } from '../helpers/pokemon.helpers'

function Pokemon() {
    let [list, setList] = useState([]);
    let [type, setType] = useState([]);
    let [weakness, setWeakness] = useState([]);
    let [searchType, setSearchType] = useState("")
    //let [searchWeakness, setSearchWeakness] = useState("")
   

    function fetchPokeName() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((res) => res.json())
        .then((pokemon) => {
            setList(pokemon.pokemon)
            setType(pokemon.pokemon.map((p) => p.type).flat())
            setWeakness(pokemon.pokemon.map((p) => p.weaknesses).flat())
        })
        .catch((err) => console.error(err))
    };

    useEffect(() => {
        fetchPokeName();
    }, []);

    console.log("names", list);
    let pokemonType = [...new Set(type)];
    let pokemonByType =  filterPokemonByType(pokemonType, searchType);
    console.log("types", pokemonType)
    let pokemonWeakness = [...new Set(weakness)];
    console.log("weaknesses", pokemonWeakness)

    return (
        <div>
            <div>
                <h1>Pokemon</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="pokemonType">Pokemon Type</label>
                        <select 
                        name="searchType" 
                        id="searchType"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}>
                            <option value="">All</option>
                            {pokemonType.map((type, idx) => {
                                return (
                                    <option key={type + idx}
                                    value={type}>{type}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
                {/*<form>
                    <div className="form-group">
                    <label htmlFor="pokemonWeakness">Pokemon Weaknesses</label>
                        <select 
                        name="searchWeakness" 
                        id="searchWeakness"
                        value={searchWeakness}
                        onChange={(e) => setSearchWeakness(e.target.value)}>
                            <option value="">All</option>
                            {pokemonWeakness.map((weakness, idx) => {
                                return (
                                    <option key={weakness + idx}
                                    value={weakness}>{weakness}</option>
                                )
                            })}
                        </select>
                    </div>
                        </form>*/}
            </div>
            <div>
                <ul>
                {list.map((pokemon) => {
                    return <label><Link to={`/pokemon/${pokemon.id}`}><img src={`${pokemon.img}`} alt={`${pokemon.name} Poster`} /></Link>
                    <li key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link></li></label>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Pokemon;