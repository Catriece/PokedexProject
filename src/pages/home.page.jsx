import { Link } from 'react-router-dom';
import { useState} from 'react';
import logo from '../pngegg.png';


function HomePage( { pokemon } ) {
    let [filterPokemon, setFilterPokemon] = useState([])
    let [showName, setShowName] = useState(false)
    let [showType, setShowType] = useState(true);
    let [showWeak, setShowWeak] = useState(false)
    let [showPokemon, setShowPokemon] = useState(false)
    let [showPokemonNames, setShowPokemonNames] = useState(false)

    const badges = [
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

    const handleTypeButton = (e) => {
      let temp = new Array(...e.target.classList)
      if (!temp.includes("bg-red")) {
        e.target.classList.toggle("bg-red")
        document.getElementById("weaknessBtn").classList.remove("bg-red")
        document.getElementById("nameButton").classList.remove("bg-red")
      }
      
      setShowType(true);
      setShowWeak(false)
      setShowName(false)
      setShowPokemon(false)
      setShowPokemonNames(false)
      console.log("type")
    };

    const handleNameButton = (e) => {
      let temp = new Array(...e.target.classList)
      if (!temp.includes("bg-red")) {
        e.target.classList.toggle("bg-red")
        document.getElementById("weaknessBtn").classList.remove("bg-red")
        document.getElementById("typeButton").classList.remove("bg-red")
      }
      setShowType(false)
      setShowName(true)
      setShowWeak(false)
      setShowPokemon(false)
      setShowPokemonNames(false)
      console.log("name")
    }
    
    const handleWeaknessButton = (e) => {
      let temp = new Array(...e.target.classList)
      if (!temp.includes("bg-red")) {
        e.target.classList.toggle("bg-red")
        document.getElementById("typeButton").classList.remove("bg-red")
        document.getElementById("nameButton").classList.remove("bg-red")
      }

      setShowWeak(true);
      setShowType(false);
      setShowName(false)
      setShowPokemon(false);
      setShowPokemonNames(false)
      console.log("weak")
    };

    const handleTypeImageClick = (e) => {
      let clickType = e.target.alt
      setShowWeak(false);
      setShowType(false);
      setShowPokemon(true)
      setShowPokemonNames(false)
      
      setFilterPokemon(pokemon.filter((poke) => {
          return poke.type.includes(clickType)
      }))
      }

      const pokemonNames = new Array(...pokemon)
      const handleNameInput = (e) => {
        e.preventDefault();
        let nameInput = filterPokemon
  
        setShowPokemonNames(pokemonNames.filter((poke) => {
          return poke.name.includes(nameInput)
        }))
  
        setShowWeak(false);
        setShowType(false);
        setShowPokemon(false)
        setShowPokemonNames(true)
        }

    const handleWeakImageClick = (e) => {
      let clickWeak = e.target.alt
      setShowWeak(false);
      setShowType(false);
      setShowPokemon(true)
      setShowPokemonNames(false)
      
      setFilterPokemon(pokemon.filter((poke) => {
          return poke.weaknesses.includes(clickWeak)
      }))
      }

      
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div id="type-btn">
              <div>
                <button id="typeButton" className="search-button bg-red" onClick={handleTypeButton}>Type</button>

                <button id="nameButton" className="search-button" onClick={handleNameButton}>Name</button>

                <button id="weaknessBtn" className="search-button" onClick={handleWeaknessButton}>Weaknesses</button>  
              </div>
              <br />
              <br />
              
                {/* OnClick Div for filtering Pokemon based on Name */}
              <div>
                {showName &&
                 <form id="name-form"> 
                  <label>
                    <input 
                    type="text" 
                    id="name-search" 
                    value={filterPokemon} 
                    onChange={(e) => setFilterPokemon(e.target.value)} placeholder="Bulbasaur"/>
                  </label>
                  <br />
                  <button 
                  type="submit" 
                  id="go-button" 
                  onClick={handleNameInput}>GO!
                  </button>
                </form> }

                  { showPokemonNames && 
                  pokemonNames.map((name) => {
                    if (name.name.toLowerCase() === filterPokemon.toLowerCase()) {
                      return <div>
                      <Link to={`pokemon/${name.id}`}>
                        <img src={name.img} 
                        alt={name.name} 
                        id={`${name.name} + "-img"`} />
                      </Link>
                      <p id={`${name.name} + "-label"`}>{name.name}</p>
                      </div>
                    }
                  }) }
              </div>

              {/* OnClick Div for Pokemon Types Badge Images */}
              <div>
                {showType && badges.map((image) => {
                return <div className="badges-img-div" ><img src={image.imageUrl} alt={image.idt} className="types-images" key={image.idt} onClick={handleTypeImageClick}/></div>})}
              </div>

              {/* OnClick Div for Pokemon Weakness Badge Images */}
              <div>
                {showWeak && badges.map((image) => {
                return <div className="badges-img-div" ><img src={image.imageUrl} alt={image.idw} className="types-images" key={image.idw} onClick={handleWeakImageClick}/></div>})}
              </div>

              {/* OnClick Div for Pokemon that matched Criteria for User Choice With Weakness or Type Filters */}
              <div>
                
                {showPokemon && filterPokemon.map((pokemon) => {
                  return <div>
                      <div id="poke-images-div">
                        <Link to={`pokemon/${pokemon.id}`}>
                          <img src={pokemon.img} alt={pokemon.name} id="poke-images"/>
                        </Link>
                      </div>
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