import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../../redux/actions";
import { postPokemon } from "../../redux/actions";
import { Link } from "react-router-dom";
import validations from "../validations";

const Create = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const handleChange = (event) => {
    setPokemonData({
      ...pokemonData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {    //Esto asegura que las validaciones se realicen cuando el usuario haya terminado de ingresar los datos en ese campo en particular.
    const { name, value } = event.target;
    const fieldErrors = validations({ ...pokemonData, [name]: value });
    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleDelete = (event) => {
    setPokemonData({
        ...pokemonData,
        types: pokemonData.types.filter(type => type !== event)
    })
}

  const handleSelect = (event) => { 
    if (pokemonData.types.length < 2) {
      setPokemonData({
        ...pokemonData,
        types: [...pokemonData.types, event.target.value],
      });
    } else {
      alert("Dos tipos como máximo");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPokemon(pokemonData));
    alert("El Pokémon " + pokemonData.name + " ha sido creado");
    setPokemonData({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  return (
    <div>
      <button>
        <Link to={"/homeSpa"}>Home</Link>
      </button>
      <div>
        <h1>Creador de Pokémones</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={pokemonData.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
              <label>Life:</label>
              <input
                type="number"
                value={pokemonData.hp}
                name="hp"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.hp && <p>{errors.hp}</p>}
            </div>

            <div>
              <label>Attack:</label>
              <input
                type="number"
                value={pokemonData.attack}
                name="attack"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.attack && <p>{errors.attack}</p>}
            </div>

            <div>
              <label>Defense:</label>
              <input
                type="number"
                value={pokemonData.defense}
                name="defense"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.defense && <p>{errors.defense}</p>}
            </div>

            <div>
              <label>Speed:</label>
              <input
                type="number"
                value={pokemonData.speed}
                name="speed"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.speed && <p>{errors.speed}</p>}
            </div>

            <div>
              <label>Height:</label>
              <input
                type="number"
                value={pokemonData.height}
                name="height"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.height && <p>{errors.height}</p>}
            </div>

            <div>
              <label>Weight:</label>
              <input
                type="number"
                value={pokemonData.weight}
                name="weight"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.weight && <p>{errors.weight}</p>}
            </div>

            <div>
              <label>Imagen:</label>
              <input
                alt="not found"
                value={pokemonData.image}
                name="image"
                pattern="https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"
                title="URL"
                placeholder="URL"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.image && <p>{errors.image}</p>}
            </div>

            <div>
              <select onChange={handleSelect}>
          <option value="fighting"> Lucha</option>
            <option value="poison">Veneno</option>
            <option value="rock">Roca</option>
            <option value="ghost">Fantasma</option>
            <option value="fire">Fuego</option>
            <option value="grass">Pasto</option>
            <option value="psychic">Psitico</option>
            <option value="dragon">Dragon</option>
            <option value="fairy">Hada</option>
            <option value="shadow">Sombra</option>
            <option value="normal">Normal</option>
            <option value="flying">Volador</option>
            <option value="ground">Tierra</option>
            <option value="bug">Bicho</option>
            <option value="steel">Metal</option>
            <option value="water">Agua</option>
            <option value="electric">Electrico</option>
            <option value="ice">Hielo</option>
            <option value="dark">Oscuro</option>
            <option value="unknow">Desconocido</option>
              </select>
            </div>
            {
                                pokemonData.types.map(element => {
                                    return (
                                        <div key={element}>
                                            <p >{element}</p>
                                            <button onClick={() => {handleDelete(element)}}>x</button>
                                        </div>
                                    )
                                }) //para poder ver que fui seleccionando
                            }

            <button type="submit">{pokemonData.name} Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
