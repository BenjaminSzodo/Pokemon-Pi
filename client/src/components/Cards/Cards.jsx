// Cards.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, cleanAllpokemons } from "../../redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Order from "../Order/Order";
import Filter from "../Filer/Filter";

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  //Paginado acá abajo
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState(""); //Para modificar el estado local y me ayude al renderizado
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(cleanAllpokemons());
    dispatch(getAllPokemons());
  };

  console.log(pokemons);
  return (
    <div>
      <div>
        <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <Order setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <button onClick={handleClick}>Limpiar filtros</button>
        <div>
          {filteredPokemons
            ?.slice(indexOfFirstPokemon, indexOfLastPokemon)
            .map((pokemon) => (
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
          currentPage={currentPage}
          pagination={pagination}
        />
      </div>
    </div>
  );
};

export default Cards;
