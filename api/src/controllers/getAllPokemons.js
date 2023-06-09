const {API_POKEMON} = require('../../utils/global')
const axios = require('axios')
const {Pokemon , Type} = require("../db")

const getApiPokemons = async() => {
    const pokeRequest = await axios(API_POKEMON);
    const pokeSubRequest = pokeRequest.data.results.map(poke => axios.get(poke.url));
    const pokeResponse = await Promise.all(pokeSubRequest);
    const pokeInfo = pokeResponse.map(res => res.data);
    const pokeUnit = pokeInfo.map(pokemon => objPokimon(pokemon));
    try {
        return pokeUnit;
    } catch (error) {
        throw Error(error.message);
    }
}

const objPokimon = (poke) => { // Con la informacion de los pokemons traída en informacionPokemons se creán objetos de Pokemones

    const pokemon = {
        id: poke.id,
        name: poke.name,
        hp: poke.stats[0].base_stat,
        attack: poke.stats[1].base_stat,
        defense: poke.stats[2].base_stat,
        speed: poke.stats[5].base_stat,
        height: poke.height,
        weight: poke.weight,
        image: poke.sprites.other.dream_world.front_default,
        types: poke.types.length < 2 ? [poke.types[0].type.name] : [poke.types[0].type.name, poke.types[1].type.name],
    };
    return pokemon;
};

const getDataBasePokemon = async() => {
    
    try {
        const pokeDb = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
    })
    const pokeFormat= pokeDb.map((e,i) => {
        return {
        id: pokeDb[i]?.id,
        name: pokeDb[i]?.name,
        image: pokeDb[i]?.image,
        hp: pokeDb[i]?.hp,
        attack: pokeDb[i]?.attack,
        defense: pokeDb[i]?.defense,
        speed: pokeDb[i]?.speed,
        height: pokeDb[i]?.height,
        weight: pokeDb[i]?.weight,
        createdInBd: true,
        types: pokeDb[i]?.types.map(element => element.dataValues.name) 
        }
    })
        console.log(pokeFormat);
        return pokeFormat 
    } catch (error) {
        throw Error(error.message);
    }
}

const getAllPokemons = async() => {
    const newApiPokemon = await getApiPokemons();
    const newDbPokemon = await getDataBasePokemon()
    const allInfo = newApiPokemon.concat(newDbPokemon);
    try {
        return allInfo ;
    } catch (error) {
        throw Error(error.message);
    }
}

module.exports= { getAllPokemons };


//NOTAS
//Promise.all() toma un array de promesas y devuelve una nueva promesa 
//que se resuelve cuando todas las promesas del array se resuelven o se rechazan.