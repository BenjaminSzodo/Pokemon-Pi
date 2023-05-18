import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <div>
      <button>
        <Link to={"/pokeCreate"}>Pokemon Creator</Link>
      </button>
      <div>
        <SearchBar/>
        <div>
          <div>
            <Cards pokemons={pokemons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;