const { Pokemon , Type } = require("../db")


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
        console.log(pokemon.types);
        await pokeCreated.addTypes(pokemon.types.split(','))
        const aux = await Pokemon.findAll({
            where:{
                name: pokemon.name
            },
            include: {
                model: Type,
                attributes: ['name'],
                through: {attributes: []}
            }
        })

        return pokeCreated
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = {postPokemon};
