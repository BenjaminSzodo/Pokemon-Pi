import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <div>
      <div>
        <Nav/>
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