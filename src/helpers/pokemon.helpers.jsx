export function filterPokemonByType(list, type) {
    if (type) return list.filter((pokemon) => pokemon.type == type)

    else return list;
}

/*export function filterFilmsByWeaknesses(list, weaknesses) {
    if (weaknesses) return list.filter((pokemon) => pokemon.weaknesses == weaknesses)

    else return list;
}*/



export function filterSinglePokemon(data, id) {
    if (id) return data.filter((pokemon) => pokemon.id == id)
}