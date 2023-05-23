export function filterPokemonByType(list, type) {
    if (type) return list.filter((pokemon) => pokemon.type == type)
};