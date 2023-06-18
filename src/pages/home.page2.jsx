//Figure out how to filter images as badge types are clicked and updated.

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../pngegg.png";
import {
  filterPokemonByType,
  filterPokemonByWeakness,
} from "../helpers/pokemon.helpers2";

function HomePage({ pokemon }) {
  let [showPokemon, setShowPokemon] = useState(true);
  // showTypes & show Weaknesses are useState for the buttons and badges
  let [showTypes, setShowTypes] = useState(true);
  let [showWeaknesses, setShowWeakness] = useState(false);
  let [filterPokemon, setFilterPokemon] = useState([]);
  let [isPokemonDataLoaded, setIsPokemonDataLoaded] = useState(false);

  useEffect(() => {
    if (pokemon.length > 0) {
      setIsPokemonDataLoaded(true);
      setFilterPokemon(pokemon);
    }
  }, [pokemon]);

  const badges = [
    {
      imageUrl: "/images/bugtype.png",
      idt: "Bug",
      idw: "Bug",
    },
    {
      imageUrl: "/images/dragontype.png",
      idt: "Dragon",
      idw: "Dragon",
    },
    {
      imageUrl: "/images/electrictype.png",
      idt: "Electric",
      idw: "Electric",
    },
    {
      imageUrl: "/images/fightingtype.png",
      idt: "Fighting",
      idw: "Fighting",
    },
    {
      imageUrl: "/images/firetype.png",
      idt: "Fire",
      idw: "Fire",
    },
    {
      imageUrl: "/images/flyingtype.png",
      idt: "Flying",
      idw: "Flying",
    },
    {
      imageUrl: "/images/ghosttype.png",
      idt: "Ghost",
      idw: "Ghost",
    },
    {
      imageUrl: "/images/grasstype.png",
      idt: "Grass",
      idw: "Grass",
    },
    {
      imageUrl: "/images/groundtype.png",
      idt: "Ground",
      idw: "Ground",
    },
    {
      imageUrl: "/images/icetype.png",
      idt: "Ice",
      idw: "Ice",
    },
    {
      imageUrl: "/images/normaltype.png",
      idt: "Normal",
      idw: "Normal",
    },
    {
      imageUrl: "/images/poisontype.png",
      idt: "Poison",
      idw: "Poison",
    },
    {
      imageUrl: "/images/psychictype.png",
      idt: "Psychic",
      idw: "Psychic",
    },
    {
      imageUrl: "/images/rocktype.png",
      idt: "Rock",
      idw: "Rock",
    },

    {
      imageUrl: "/images/watertype.png",
      idt: "Water",
      idw: "Water",
    },
  ];

  //Handling Buttons

  const handleTypeButton = (e) => {
    let redButton = new Array(...e.target.classList);
    if (!redButton.includes("bg-red")) {
      e.target.classList.toggle("bg-red");
      document.getElementById("weakness-button").classList.remove("bg-red");
    }

    setShowTypes(true);
    setShowWeakness(false);
    setShowPokemon(true);
    setFilterPokemon(true);
  };

  const handleWeaknessButton = (e) => {
    let redButton = new Array(...e.target.classList);
    if (!redButton.includes("bg-red")) {
      e.target.classList.toggle("bg-red");
      document.getElementById("type-button").classList.remove("bg-red");
    }

    setShowTypes(false);
    setShowWeakness(true);
    setShowPokemon(true);
    setFilterPokemon(true);
  };

  //Handling Badges

  let clickedTypeArr = [];
  const handleTypeBadgeClick = (e) => {
    // adding to and removing from classlist and array
    let clickedType = e.target.alt;

    if (!clickedTypeArr.includes(clickedType)) {
      e.target.classList.toggle("type-" + clickedType);
      clickedTypeArr.push(clickedType);
    } else {
      e.target.classList.remove(clickedType);
      let index = clickedTypeArr.indexOf("type-" + clickedType);
      if (index > -1) {
        clickedTypeArr.splice(index, 1);
      }
    }

    console.log("typearray", clickedTypeArr);

    // highlighting button that is clicked
    let highlightBadge = new Array(...e.target.classList);
    if (!highlightBadge.includes("bg-red")) {
      e.target.classList.toggle("bg-red");
    } else {
      e.target.classList.remove("bg-red");
    }

    // filtering pokemon based on click
    // setFilterPokemon(filterPokemonByType(pokemon, clickedTypeArr));
  };

  let clickedWeakArr = [];
  const handleWeaknessBadgeClick = (e) => {
    let clickedWeak = e.target.alt;
    if (!clickedWeakArr.includes(clickedWeak)) {
      e.target.classList.toggle("weak-" + clickedWeak);
      clickedWeakArr.push(clickedWeak);
    } else {
      e.target.classList.remove(clickedWeak);
      let index = clickedWeakArr.indexOf("weak-" + clickedWeak);
      if (index > -1) {
        clickedWeakArr.splice(index, 1);
      }
    }
    console.log("weakarray", clickedWeakArr);

    let highlightBadge = new Array(...e.target.classList);
    if (!highlightBadge.includes("bg-white")) {
      e.target.classList.toggle("bg-white");
    } else {
      e.target.classList.remove("bg-white");
    }

    // filtering pokemon based on click
    // setFilterPokemon(filterPokemonByWeakness(pokemon, clickedWeakArr));
  };

  return (
    <div id="main">
      <div id="info">
        <div id="left-div" className="poke-info-div">
          <div className="logo">
            <img src={logo} alt="pokemon-logo" className="logo" />
          </div>
          <div id="buttons">
            <button
              id="type-button"
              className="search-button bg-red"
              onClick={handleTypeButton}
            >
              Type
            </button>

            <button
              id="weakness-button"
              className="search-button"
              onClick={handleWeaknessButton}
            >
              Weaknesses
            </button>
          </div>
          <br />
          <div id="badge-images-div">
            {showTypes &&
              badges.map((image) => {
                return (
                  <div id="indiv-badge-div">
                    <img
                      src={image.imageUrl}
                      alt={image.idt}
                      id={image.idt}
                      className="badge-images"
                      key={image.idt}
                      onClick={handleTypeBadgeClick}
                    />
                  </div>
                );
              })}

            {showWeaknesses &&
              badges.map((image) => {
                return (
                  <div className="badges-img-div">
                    <img
                      src={image.imageUrl}
                      alt={image.idw}
                      className="badge-images"
                      key={image.idw}
                      onClick={handleWeaknessBadgeClick}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div id="right-div" className="poke-info-div">
          {/* <div id="pokemon-label-div">
            <h3 id="pokemon-label">Pokemon</h3>
          </div> */}
          <div id="pokemon-div">
            {showPokemon &&
              pokemon.map((info) => {
                return (
                  <div id="indiv-pokemon-div">
                    <br />
                    <Link to={`pokemon/${info.id}`} key={info.id + info.name}>
                      <img
                        src={info.img}
                        alt={info.name}
                        id={info.id}
                        className="pokemon-images"
                      />
                    </Link>
                    {/* <p id="pokemon-name" className="under-img">
                      {info.name}
                    </p>
                    <p id="pokemon-number" className="under-img">
                      {info.num}
                    </p> */}
                    <br />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
