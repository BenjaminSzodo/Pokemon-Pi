const { getAllPokemons } = require("../controllers/getAllPokemons");

const getPokemonByName = async (name) => {
  let pokeTotal = await getAllPokemons();
  if (name) {
    console.log(name);
    let pokemonName = pokeTotal.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonName.length > 0) {
      return pokemonName;
    }
  }
  return null;
};

if (typeof window === "undefined") {
  module.exports = { getPokemonByName };
}
