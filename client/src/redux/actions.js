import { ALL_POKEMONS ,CLEAN_ALL_POKEMONS, POKEMON_BY_ID, CLEAN_DETAIL, GET_POKEMON_BY_NAME, CLEAN_POKEMON_NAME , ORDER_BY_NAME, ORDER_BY_ATTK} from "./actionsType";
import axios from "axios";


export const getAllPokemons = () => {

    return async(dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            const pokemons = response.data;
            return dispatch({
                type: ALL_POKEMONS,
                payload: pokemons,
            });
        } catch (error) {
            throw Error({error : error.message});
        }
    }

} 

export const cleanAllpokemons = (dispatch) => {
        return dispatch({
            type: CLEAN_ALL_POKEMONS,
            payload: [],
        })
};

export const getPokemonById = (id,dispatch) => {

    return async() => {
        try {
            const pokemonById = await axios.get(`http://localhost:3001/pokemons/id/${id}`);
            return dispatch({
                type: POKEMON_BY_ID,
                payload: pokemonById,
            })
        } catch (error) {
            throw Error({error: error.message})
        }
    }
}

export const cleanDetail = () => {

    return {
        type: CLEAN_DETAIL,
        payload: [],
    }

}

export const getPokemonByName = (name) => {
    return async function(dispatch) {
        try {
        const pokemonByName = await axios.get(`http://localhost:3001/pokename?name=` + name);
        console.log(pokemonByName.data);
        return dispatch({
            type:GET_POKEMON_BY_NAME,
            payload: pokemonByName.data,
        });
    } catch (error) {
        throw Error({error: error.message});
    }
    }
}

export const cleanPokemonByName = () => {
    return (dispatch) => {
      try {
        dispatch({
          type: CLEAN_POKEMON_NAME,
          payload: [],
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  };
  

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload 
    }
}

export const orderByAttk = (payload) => {
    return {
        type: ORDER_BY_ATTK,
        payload 
    } 
}