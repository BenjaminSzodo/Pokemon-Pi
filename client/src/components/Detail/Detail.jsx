
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const URL = `http://localhost:3001/pokemons/id/${id}`

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/pokemons/${id}`)
    .then(response => response.data)
    .then(( data ) => {
       if (data[0].name) {
          setPokemon(data[0]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setPokemon({});
 }, [id]);
console.log(pokemon.name);
return (
  <div>
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <div>
        <p>Life: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types}</p>
      </div>
      <button>
        <Link to={'/homeSpa'}>Home</Link>
      </button>
    </div>
  </div>
);
};


export default Detail;