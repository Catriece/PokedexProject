export function filterPokemonByType(data, type) {
    if (type) return data.filter((pokemon) => pokemon.type == type)

    else return data
}

/*export function filterFilmsByWeaknesses(list, weaknesses) {
    if (weaknesses) return list.filter((pokemon) => pokemon.weaknesses == weaknesses)

    else return list;
}*/



export function filterSinglePokemon(data, id) {
    if (id) return data.filter((pokemon) => pokemon.id == id)
}