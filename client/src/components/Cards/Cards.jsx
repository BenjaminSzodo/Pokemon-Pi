
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";



const Cards = () => {
const dispatch = useDispatch()
const pokemons = useSelector(state => state.allPokemons)


//Paginado acá abajo
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState(''); //Para modificar el estado local y me ayude al renderizado
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  // const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  
  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  }

    
    useEffect(() => {
        dispatch(getAllPokemons())
    },[])
    console.log(pokemons);
    return (
      
      <div>
        <div>
        {
        pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon).map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          id={pokemon.id}
        />
      ))}
        </div>
        <Pagination
                                    pokemonsPerPage={pokemonsPerPage}
                                    allPokemons={pokemons.length}
                                    pagination={pagination}
                                />
      </div>
    );
  };


  export default Cards