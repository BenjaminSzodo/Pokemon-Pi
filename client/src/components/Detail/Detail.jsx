import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Detail.module.css';
import image from '../Images/pradera2.png';


const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.data)
      .then((data) => {
        if (data[0].name) {
          setPokemon(data[0]);
        }
      });
    return setPokemon({});
  }, [id]);

  console.log(pokemon.name);

  return (
    <div className={style.background}>
    <div className={style.background}>
      <div className={style.container}>
        <img src={pokemon.image} alt={pokemon.name} className={style.image} />
        <div className={style.info}>
          <h1 className={style.name}>{pokemon.name}</h1>
          <div className={style.stats}>
            <p>Life: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Speed: {pokemon.speed}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types && pokemon.types.join(", ")}</p>
          </div>
        </div>
        <Link to={"/homeSpa"}>
          <button className={style.button}>Home</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Detail;
