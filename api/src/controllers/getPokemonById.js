
const getPokemonById = (id, allPokemons) => {

    try {
        if (id.length === 36) {
            const dataPokemon = allPokemons.filter((poke) => poke.id === id);
            if (dataPokemon.length > 0) {
                return {status : 200 , data : dataPokemon}
            }
        }
        if (id) {
            const apiPokemon = allPokemons.filter((poke) => poke.id === +id);
            if (apiPokemon.length > 0) {
                return {status : 200 , data : apiPokemon}
            }
        }
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = { getPokemonById}