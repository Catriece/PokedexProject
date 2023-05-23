import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



let urlStorage = []

function PokemonTypes() {
    const images = [
        {
            imageUrl: "/images/bugtype.png",
            id: "bug"
        }, 
        { 
            imageUrl: "/images/darktype.png",
            id: "dark"
        }, 
        {
            imageUrl: "/images/dragontype.png",
            id: "dragon"
        }, 
        {
            imageUrl: "/images/electrictype.png",
            id: "electric"
        }, 
        {
            imageUrl: "/images/fairytype.png",
            id: "fairy"
        }, 
        { 
            imageUrl: "/images/fightingtype.png",
            id: "fighting"
        }, 
        {
            imageUrl: "/images/firetype.png",
            id: "fire"
        }, 
        { 
            imageUrl: "/images/flyingtype.png",
            id: "flying"
        }, 
        { 
            imageUrl: "/images/ghosttype.png",
            id: "ghost"
        }, 
        {
            imageUrl: "/images/grasstype.png",
            id: "grass"
        }, 
        { 
            imageUrl: "/images/groundtype.png",
            id: "ground"
        }, 
        {
            imageUrl: "/images/icetype.png",
            id: "ice"
        }, 
        {
            imageUrl: "/images/normaltype.png",
            id: "normal"
        }, 
        {
            imageUrl: "/images/poisontype.png",
            id: "poison"
        }, 
        { 
            imageUrl: "/images/psychictype.png",
            id: "psychic"
        }, 
        {
            imageUrl: "/images/rocktype.png",
            id: "rock"
        }, 
        {
            imageUrl: "/images/steeltype.png",
            id: "steel"
        }, 
        {
            imageUrl: "/images/watertype.png",
            id: "water"
        }
    ]
    
    let [list, setList] = useState([])
    

        function fetchPokeName() {
            fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => {
                urlStorage.push(res.url)
                return res.json()})
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err))
        };

        useEffect(() => {
            fetchPokeName();
        }, []);

        console.log("list", list)
        console.log("storage", urlStorage)

        return (
            <div>
                <div>
                    <h1>Pokemon Types</h1>
                </div>
                <div>
                    <ul>
                        {images.map((image) => {
                            return <Link to={`pokemon/${image.id}`}><li><img src={image.imageUrl}/></li></Link>
                        })}
                    </ul>
                </div>
            </div>
        )

}

export default PokemonTypes;