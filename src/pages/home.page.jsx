import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../pngegg.png';


function HomePage({ pokemon }) {
    //let [pokemon, setPokemon] = useState([])
    let [filterPokemon, setFilterPokemon] = useState([])
    let [showName, setShowName] = useState(false)
    let [showType, setShowType] = useState(true);
    let [showWeak, setShowWeak] = useState(false)
    let [showPokemon, setShowPokemon] = useState(false)

    const images = [
      {
          imageUrl: "/images/bugtype.png",
          idt: "Bug",
          idw: "Bug"
      }, 
      {
          imageUrl: "/images/dragontype.png",
          idt: "Dragon",
          idw: "Dragon"
      }, 
      {
          imageUrl: "/images/electrictype.png",
          idt: "Electric",
          idw: "Electric"
      },
      { 
          imageUrl: "/images/fightingtype.png",
          idt: "Fighting",
          idw: "Fighting"
      }, 
      {
          imageUrl: "/images/firetype.png",
          idt: "Fire",
          idw: "Fire"
      }, 
      { 
          imageUrl: "/images/flyingtype.png",
          idt: "Flying",
          idw: "Flying"
      }, 
      { 
          imageUrl: "/images/ghosttype.png",
          idt: "Ghost",
          idw: "Ghost"
      }, 
      {
          imageUrl: "/images/grasstype.png",
          idt: "Grass",
          idw: "Grass"
      }, 
      { 
          imageUrl: "/images/groundtype.png",
          idt: "Ground",
          idw: "Ground"
      }, 
      {
          imageUrl: "/images/icetype.png",
          idt: "Ice",
          idw: "Ice"
      }, 
      {
          imageUrl: "/images/normaltype.png",
          idt: "Normal",
          idw: "Normal"
      }, 
      {
          imageUrl: "/images/poisontype.png",
          idt: "Poison",
          idw: "Poison"
      }, 
      { 
          imageUrl: "/images/psychictype.png",
          idt: "Psychic",
          idw: "Psychic"
      }, 
      {
          imageUrl: "/images/rocktype.png",
          idt: "Rock",
          idw: "Rock"
      }, 
      
      {
          imageUrl: "/images/watertype.png",
          idt: "Water",
          idw: "Water"
      }
  ]

    // function fetchPokeName() {
    //     fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    //     .then((res) => res.json())
    //     .then((pokemon) => setPokemon(pokemon.pokemon))
    //     .catch((err) => console.error(err))
    // };

    // useEffect(() => {
    //     fetchPokeName();
    // }, []);

    let navigate = useNavigate()

    
    const handleNameClick = (e) => {
      // let temp = new Array(...e.target.classList)
      // if (!temp.includes("bg-red")) {
      //   e.target.classList.toggle("bg-red")
      //   document.getElementById("weaknessBtn").classList.toggle("bg-red")
      // }
      setShowType(false)
      setShowName(true)
      setShowWeak(false)
      setShowPokemon(false)
      console.log("name")
    }
    
    const handleTypeClick = (e) => {
      // let temp = new Array(...e.target.classList)
      // if (!temp.includes("bg-red")) {
      //   e.target.classList.toggle("bg-red")
      //   document.getElementById("weaknessBtn").classList.toggle("bg-red")
      // }
      
      setShowType(true);
      setShowWeak(false)
      setShowName(false)
      setShowPokemon(false)
      console.log("type")
    };
    
    const handleWeakClick = (e) => {
      // let temp = new Array(...e.target.classList)
      // if (!temp.includes("bg-red")) {
      //   e.target.classList.toggle("bg-red")
      //   document.getElementById("typeButton").classList.toggle("bg-red")
      // }
      setShowWeak(true);
      setShowType(false);
      setShowName(false)
      setShowPokemon(false);
      console.log("weak")
    };

    
    const handleImageClick = (e) => {
      let clickType = e.target.alt
      setShowWeak(false);
      setShowType(false);
      setShowPokemon(true)
      
      setFilterPokemon(pokemon.filter((poke) => {
          return poke.type.includes(clickType)
      }))
      }
      

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div id="type-btn">
              <div>
                <button id="typeButton" className="search-button bg-red" onClick={handleTypeClick}>Type</button>

                <button id="nameButton" className="search-button" onClick={handleNameClick}></button>

                <button id="weaknessBtn" className="search-button" onClick={handleWeakClick}>Weaknesses</button>  
              </div>
              <br />
              <br />
              <div>
                {showName &&
                 <form> 
                  <label>
                    <input type="text" placeholder="Bulbasaur"/>
                  </label>
                  </form>}
              </div>
              <div>
                {showType && images.map((image) => {
                return <div className="types-img" ><img src={image.imageUrl} alt={image.idt} className="types-images" key={image.idt} onClick={handleImageClick}/></div>})}
              </div>
              <div>
                {showWeak && images.map((image) => {
                return <div className="types-img" ><Link to={`pokemon/${image.idw}`} key={image.idw}><img src={image.imageUrl} alt={image.idw} className="types-images"/></Link></div>})}
              </div>
              <div>
                <h1>Hello!</h1>
                {showPokemon && images.map((image) => {
                  return <div id="nav-images-div"><img src={image.imageUrl} alt={image.idw} id="nav-images" onClick={navigate("/")}/></div>
                })}
                {showPokemon && filterPokemon.map((pokemon) => {
                  return <div>
                      <div id="poke-images-div"><img src={pokemon.img} alt={pokemon.name} id="poke-images"/></div>
                    </div>
                })}
              </div>
            </div>
      
          </div>
            <br />
            <br />
          
        </header>
      </div>
    )
}

export default HomePage;