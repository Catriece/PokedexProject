export function filterPokemonByType(list, type) {
  if (type) return list.filter((pokemon) => pokemon.type.includes(type));
  else return list;
}

export function filterPokemonByWeakness(list, weakness) {
  if (weakness) {
    return list.filter((pokemon) => pokemon.weaknesses.includes(weakness));
  } else return list;
}

// export function filterSinglePokemon(data, id) {
//   if (id) return data.filter((pokemon) => pokemon.id == id);
// }
