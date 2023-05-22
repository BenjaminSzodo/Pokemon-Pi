import { ALL_POKEMONS,CLEAN_ALL_TYPES, ALL_TYPES , POKEMON_BY_ID , CLEAN_DETAIL, GET_POKEMON_BY_NAME, CLEAN_POKEMON_NAME, ORDER_BY_NAME, ORDER_BY_ATTK, CLEAN_ALL_POKEMONS, FILTER_TYPE, POST_POKEMON, FILTER_DB_API} from "./actionsType";

const initialState = {
    allPokemons: [], // Guarda aquí los Pokémon originales sin filtrar
    filteredPokemons: [], // Almacena los Pokémon filtrados
    allTypes: [],
    pokemonById: [],
    pokemonByName: [],
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKEMONS:
            return {
              ...state,
              allPokemons: action.payload,
              filteredPokemons: action.payload, // Inicialmente, ambos conjuntos son iguales
            };
        case CLEAN_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            }
        case ALL_TYPES:
            return {
                ...state,
                allTypes: action.payload,
            }
        case CLEAN_ALL_TYPES: 
            return {
                ...state,
                allTypes: action.payload,
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
                filteredPokemons: action.payload,
            }
        case CLEAN_POKEMON_NAME:
            return {
                ...state,
                pokemonByName: [],
            }
            case ORDER_BY_NAME:
                if (action.payload === "default") {
                  return {
                    ...state,
                    filteredPokemons: state.allPokemons, // Utiliza el estado original de todos los pokemons
                  };
                }
              
                const allPokemonsCopy = [...state.filteredPokemons];
                const orderName =
                  action.payload === "A"
                    ? allPokemonsCopy.sort((a, b) =>
                        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                      )
                    : allPokemonsCopy.sort((a, b) =>
                        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                      );
              
                return {
                  ...state,
                  filteredPokemons: orderName,
                };
            case ORDER_BY_ATTK:
                if (action.payload === "default") {
                    return {
                      ...state,
                      filteredPokemons: state.allPokemons, // Utiliza el estado original de todos los pokemons
                    };
                  }
                const allPokemonsCopy2 = [...state.filteredPokemons];
                const orderAttk =
                  action.payload === "A"
                    ? allPokemonsCopy2.sort((a, b) => a.attack - b.attack)
                    : allPokemonsCopy2.sort((a, b) => b.attack - a.attack);
                return {
                  ...state,
                  filteredPokemons: orderAttk,
                };
            case FILTER_TYPE:
                const filteredPokemons = action.payload === 'allPokemons'
                  ? state.allPokemons // Si el filtro es "allPokemons", muestra todos los Pokémon
                  : state.allPokemons.filter(element => element.types?.includes(action.payload));
              
                return {
                  ...state,
                  filteredPokemons: filteredPokemons,
                };
            case POST_POKEMON:
                return {
                    ...state,
                }
            case FILTER_DB_API:
                state.filteredPokemons = state.allPokemons
                const allPokemonsCopy3 = state.allPokemons
                const filterPokemon = action.payload === 'created'
                ? allPokemonsCopy3.filter((element) => typeof element.id === "string")
                : allPokemonsCopy3.filter((element) => typeof element.id === "number");
                return {
                    ...state,
                    filteredPokemons: action.payload === "All" ? state.allPokemons : filterPokemon,
                };
        default:
            return {...state}
    }
}

export default reducer;