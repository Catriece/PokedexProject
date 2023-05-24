export function filterPokemonByType(pokemon, type) {
    if (type) return pokemon.filter((poke) => poke.type === type)

    else return pokemon;
}

export function filterPokemonByWeakness(pokemon, weak) {
    if (weak) return pokemon.filter((poke) => poke.weaknesses === weak)

    else return pokemon;
}