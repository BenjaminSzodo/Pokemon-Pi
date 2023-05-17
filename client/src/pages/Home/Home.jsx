import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <div>
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