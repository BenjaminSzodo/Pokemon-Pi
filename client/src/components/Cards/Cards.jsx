
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";



const Cards = () => {
    const pokemons = useSelector(state => state.allPokemons)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPokemons())
    },[])
    console.log(pokemons);
    return (
      <div>
        <SearchBar/>
        <div>
        {pokemons.slice(0, 20).map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          id={pokemon.id}
        />
      ))}
        </div>

      </div>
    );
  };
//   name={pokemon.name}
//   types={pokemon.types}
  export default Cards