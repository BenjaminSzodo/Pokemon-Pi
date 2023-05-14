import { ALL_POKEMONS, POKEMON_BY_ID , CLEAN_DETAIL, GET_POKEMON_BY_NAME, CLEAN_POKEMON_NAME} from "./actionsType";

const initialState = {
    allPokemons : [],
    pokemonById: [],
    pokemonByName: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        case POKEMON_BY_ID:
            return {
                ...state,
                pokemonById: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonById: action.payload,
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonByName: action.payload,
            }
        case CLEAN_POKEMON_NAME:
            return {
                ...state,
                pokemonByName: [],
            }
        default:
            return {...state}
    }
}

export default reducer;