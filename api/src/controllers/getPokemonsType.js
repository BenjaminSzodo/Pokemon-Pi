const {Type} = require("../db");
const { API_POKEMON_TYPE } = require('../../utils/global');
const axios = require('axios')

const getPokemonsType = async(req,res) => {
    try {
        const apiTypes = await axios.get(API_POKEMON_TYPE);
        const types = await apiTypes.data;
        for ( element of types.results) {
            const be = await Type.findOne({
                where: {
                    name: element.name
                }
            })
            if (be) 
                return res.status(200).json(await Type.findAll())
                await Type.create({name: element.name})
            
        }
        res.status(200).json(await Type.findAll())
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {getPokemonsType}