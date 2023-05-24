import { useParams } from 'react-router-dom';
import { useState } from "react";

function SinglePoketypePage( { pokemon } ) {
    let [showPokemon, setShowPokemon] = useState(true);

    let { id } = useParams();
    let pokeId = pokemon[parseInt(id) - 1];
    
    // let getImage = setShowPokemon(pokemon.map((info) => {
    //     if (info.id === pokeId) {
    //         return info.img
    //     }
    // }))
    
    // let getName = setShowPokemon(pokemon.map((info) => {
    //     if (info.id === pokeId) {
    //         return info.name
    //     }
    // }))
    


    console.log("testing pokemon", pokemon)
    console.log("testing", id)
    console.log("testing indiv", pokeId)
    //console.log(pokeId.img)

    return (
        <div>
            <h1>Hello!</h1>
             <div id="pokemon-img-div">
                <p>Pokemon Image Goes Here</p>
             </div>
             <div>
                <h3>Pokemon Name</h3>
             </div>
             {/* These divs are side by side */}
             <div className="poke-types-weaks"> Types </div>
             <div className="poke-types-weaks"> Weaks </div>
        </div>
    )

}

export default SinglePoketypePage;