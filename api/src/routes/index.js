const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemons } = require("../controllers/getAllPokemons");
const { getPokemonById } = require('../controllers/getPokemonById');
const { postPokemon } = require('../controllers/postPokemon');
const { getPokemonByName } = require('../controllers/getPokemonsByName');
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

router.get("/pokename", async (req, res) => {
    const { name } = req.query;
    if (name) {
      console.log(name);
      const pokemonName = await getPokemonByName(name);
      if (pokemonName === null) {
        return res.status(404).send("No se encontraron resultados");
      }
      if (pokemonName.length > 0) {
        return res.status(200).json(pokemonName);
      }
    }
    return res.status(400).send("Se debe proporcionar un nombre");
  });

  router.post('/pokemons/pokeCreate', async(req,res) => {
    const {name, id, image, hp, attack, speed, defense, weight, height,types} = req.body;
    const pokeCreate = {name, id, image, hp, attack, speed, defense, weight, height, types};
    try {
        
        const pokemon = await postPokemon(pokeCreate);
        res.status(200).json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
});
router.get('/poketypes', getPokemonsType)

module.exports = router;

