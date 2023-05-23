const { Pokemon } = require("../db")

const postPokemon = async(pokemon) => {
    try {
        const pokeCreated =  await Pokemon.create({
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
        });
        return pokeCreated
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = {postPokemon};
