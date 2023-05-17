import { ALL_POKEMONS, POKEMON_BY_ID , CLEAN_DETAIL, GET_POKEMON_BY_NAME, CLEAN_POKEMON_NAME, ORDER_BY_NAME, ORDER_BY_ATTK, CLEAN_ALL_POKEMONS} from "./actionsType";

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
        case CLEAN_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
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
                allPokemons: action.payload,
            }
        case CLEAN_POKEMON_NAME:
            return {
                ...state,
                pokemonByName: [],
            }
        case ORDER_BY_NAME:
            const allPokemonsCopy = [...state.allPokemons]
            const orderName = action.payload === 'A' ? 
            allPokemonsCopy.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            }) :
            allPokemonsCopy.sort((a, b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
            return{
                ...state,
                allPokemons: orderName,
            }
        case ORDER_BY_ATTK:
            const allPokemonsCopy2 = [...state.allPokemons]
            const orderAttk = action.payload === 'A' ? allPokemonsCopy2.sort((a,b)=> a.attack - b.attack) : allPokemonsCopy2.sort((a,b)=> a.attack - b.attack)
            return {
                ...state,
                allPokemons: orderAttk,
            }
        default:
            return {...state}
    }
}

export default reducer;