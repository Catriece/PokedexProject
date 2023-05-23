import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
    {
        imageUrl: "/images/bugtype.png",
        id: 1
    }, 
    { 
        imageUrl: "/images/darktype.png",
        id: 2
    }, 
    {
        imageUrl: "/images/dragontype.png",
        id: 3
    }, 
    {
        imageUrl: "/images/electrictype.png",
        id: 4
    }, 
    {
        imageUrl: "/images/fairytype.png",
        id: 5
    }, 
    { 
        imageUrl: "/images/fightingtype.png",
        id: 6
    }, 
    {
        imageUrl: "/images/firetype.png",
        id: 7
    }, 
    { 
        imageUrl: "/images/flyingtype.png",
        id: 8
    }, 
    { 
        imageUrl: "/images/ghosttype.png",
        id: 9
    }, 
    {
        imageUrl: "/images/grasstype.png",
        id: 10
    }, 
    { 
        imageUrl: "/images/groundtype.png",
        id: 11
    }, 
    {
        imageUrl: "/images/icetype.png",
        id: 12
    }, 
    {
        imageUrl: "/images/normaltype.png",
        id: 13
    }, 
    {
        imageUrl: "/images/poisontype.png",
        id: 14
    }, 
    { 
        imageUrl: "/images/psychictype.png",
        id: 15
    }, 
    {
        imageUrl: "/images/rocktype.png",
        id: 16
    }, 
    {
        imageUrl: "/images/steeltype.png",
        id: 17
    }, 
    {
        imageUrl: "/images/watertype.png",
        id: 18
    }
]

function PokemonWeaknesses() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/")
    }

    let [list, setList] = useState([])
        function fetchPokeName() {
            fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then((res) => res.json())
            .then((pokemon) => setList(pokemon.pokemon))
            .catch((err) => console.error(err))
        };

        useEffect(() => {
            fetchPokeName();
        }, []);
        
        return (
            <div>
                <div>
                    <button className="backButton" onClick={goHome}>Home</button>
                    <h1>Pokemon Weaknesses</h1>
                </div>
                <div>
                    <img src="/images/bugtype.png" alt="" className="weakness" />
                    <img src="/images/darktype.png" alt="" className="weakness" />
                    <img src="/images/dragontype.png" alt="" className="weakness" />
                    <img src="/images/electrictype.png" alt="" className="weakness" />
                    <img src="/images/fairytype.png" alt="" className="weakness" />
                    <img src="/images/fightingtype.png" alt="" className="weakness" />
                    <img src="/images/firetype.png" alt="" className="weakness" />
                    <img src="/images/flyingtype.png" alt="" className="weakness" />
                    <img src="/images/ghosttype.png" alt="" className="weakness" />
                    <img src="/images/grasstype.png" alt="" className="weakness" />
                    <img src="/images/groundtype.png" alt="" className="weakness" />
                    <img src="/images/icetype.png" alt="" className="weakness" />
                    <img src="/images/normaltype.png" alt="" className="weakness" />
                    <img src="/images/poisontype.png" alt="" className="weakness" />
                    <img src="/images/psychictype.png" alt="" className="weakness" />
                    <img src="/images/rocktype.png" alt="" className="weakness" />
                    <img src="/images/steeltype.png" alt="" className="weakness" />
                    <img src="/images/watertype.png" alt="" className="weakness" />
                </div>
                
            </div>
        )
}

export default PokemonWeaknesses;