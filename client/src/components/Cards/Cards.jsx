import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, cleanAllpokemons } from "../../redux/actions";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Order from "../Order/Order";
import Filter from "../Filer/Filter";
import style from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  // Paginado acá abajo
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [order, setOrder] = useState(""); // Para modificar el estado local y ayudar al renderizado
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

  return (
    <div>
      <div className={style.filtersContainer}>
        <div className={style.center}>
          <Filter setCurrentPage={setCurrentPage} setOrder={setOrder} />
        </div>
        <div className={style.center}>
          <Order setCurrentPage={setCurrentPage} setOrder={setOrder} />
        </div>
        <div className={style.center}>
          <button onClick={handleClick} className={style.button}>Limpiar filtros</button>
        </div>
      </div>
      <div className={style.container}>
        {filteredPokemons
          ?.slice(indexOfFirstPokemon, indexOfLastPokemon)
          .map((pokemon) => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types && pokemon.types.join(", ")}
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
  );
};

export default Cards;
