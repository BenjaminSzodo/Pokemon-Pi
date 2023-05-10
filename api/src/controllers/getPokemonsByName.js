const { getAllPokemons } = require("../controllers/getAllPokemons");

const getPokemonsByName = async (name) => {
  try {
    let pokeAll = await getAllPokemons();
    if (name) {
      let pokeName = pokeAll.filter((poke) =>
        poke.name.toLowerCase().includes(name.toLowerCase())
      );
      if (pokeName.length > 0) {
        return pokeName;
      }
    }

    return null;
    
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { getPokemonsByName };
