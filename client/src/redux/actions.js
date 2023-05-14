import { ALL_POKEMONS , POKEMON_BY_ID, CLEAN_DETAIL, GET_POKEMON_BY_NAME, CLEAN_POKEMON_NAME} from "./actionsType";
import axios from "axios";
import { useDispatch } from "react-redux";



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

export const cleanDetail = (dispatch) => {
    try {
    return dispatch({
        type: CLEAN_DETAIL,
        payload: [],
    })
    } catch (error) {
        throw Error({error: error.message})
    }

}

export const getPokemonByName = (name) => {
    return async(dispatch) =>{
        try {
        const pokemonByName = await axios.get(`http://localhost:3001/pokemons/name?name=` + name);
        console.log(pokemonByName);
        return dispatch({
            type:GET_POKEMON_BY_NAME,
            payload: pokemonByName.data,
        });
    } catch (error) {
        throw Error({error: error.message});
    }
    }

}

export const cleanPokemonByName = (dispatch) => {
    try {
    return dispatch({
        type: CLEAN_POKEMON_NAME,
        payload: [],
    })
    } catch (error) {
        throw Error({error: error.message})
    }
}