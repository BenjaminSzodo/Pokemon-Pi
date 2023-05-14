const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemons } = require("../controllers/getAllPokemons");
const { getPokemonById } = require('../controllers/getPokemonById');
const { postPokemon } = require('../controllers/postPokemon');
const { getPokemonsByName } = require('../controllers/getPokemonsByName');
const {getPokemonsType} = require('../controllers/getPokemonsType')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons',async (req,res)=>{
    try {
        const getPokemons = await getAllPokemons();
        res.status(200).json(getPokemons);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/pokemons/:id', async (req,res) => {
    const {id} = req.params;
    const allPokemons = await getAllPokemons()
    const result = getPokemonById(id,allPokemons)
    try {
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

router.get('/pokemons/name', async(req,res) => {
    const {name} = req.query;
    try {
        if (name) {
            const pokeName = await getPokemonsByName(name);
            if (pokeName.length > 0) {
                return res.status(200).json(pokeName)
            }
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/pokemons/pokeCreate', async(req,res) => {
    const {name, id, image, hp, attack, speed, defense, weight, height} = req.body;
    const pokeCreate = {name, id, image, hp, attack, speed, defense, weight, height};
    try {
        const pokemon = await postPokemon(pokeCreate);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
router.get('/pokemons/poketypes', getPokemonsType)

module.exports = router;

