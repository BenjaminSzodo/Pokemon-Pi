const { Type } = require('../db')
const { API_POKEMON_TYPE } = require('../../utils/global');
const axios = require('axios')

const getPokemonsType = async (req, res) => {
    try {
      const typesApi = await axios.get(API_POKEMON_TYPE);
      const tipos = await typesApi.data;
      for (t of tipos.results) {
        const existe = await Type.findOne({
          where: {
            name: t.name,
          },
        });
        if (existe) return res.json(await Type.findAll()); 
        await Type.create({ name: t.name });
      }
      res.json(await Type.findAll());
    } catch (error) {
      
      res.status(500).json({ message: "Error retrieving types" });
    }
  };
  
  module.exports = { getPokemonsType };