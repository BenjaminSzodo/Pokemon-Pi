import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, postPokemon } from "../../redux/actions";
import { Link } from "react-router-dom";
import validations from "../validations";
import style from './Create.module.css'
import image from '../Images/pokeball.png'

const Create = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const allTypes = useSelector((state) => state.allTypes);
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
  console.log(pokemonData);
  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  const handleChange = (event) => {
    setPokemonData({
      ...pokemonData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const fieldErrors = validations({ ...pokemonData, [name]: value });
    setErrors({ ...errors, [name]: fieldErrors[name] });
  };

  const handleDelete = (type) => {
    setPokemonData({
      ...pokemonData,
      types: pokemonData.types.filter((t) => t !== type),
    });
  };

  const handleSelect = (event) => {
    if (pokemonData.types.length < 2) {
      setPokemonData({
        ...pokemonData,
        types: [...pokemonData.types, event.target.value], // Agrega el nuevo tipo al array
      });
    } else {
      alert("Dos tipos como máximo");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Convierte el array de tipos en una cadena separada por comas
    const typesString = pokemonData.types.join(",");

    const fieldErrors = validations(pokemonData);
    if (Object.keys(fieldErrors).length > 0) {
      alert("Complete los campos requeridos");
      setErrors(fieldErrors);
      return;
    }
  
    const dataToSend = {
      ...pokemonData,
      types: typesString,
    };
  
    dispatch(postPokemon(dataToSend));
  
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
      <div className={style.background}>
      <div>
        <div className={style.container}>      
        <Link to={"/homeSpa"}>
          <button className={style.button} >Home</button>
        </Link>
          <img src={image} alt="" className={style.image}/>
          <h1>Creador de Pokémones</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={pokemonData.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
              <option>Select one</option>
              {
                            allTypes?.map(element => {
                                return (
                                    <option key={element.id} value={element.name}>{element.name}</option>
                                )
                            })
                        }
              </select>
            </div>
            {
                                pokemonData.types.map(element => { //muestra que types han sido escogidos
                                    return (
                                        <div key={element}>
                                            <p >{element}</p>
                                            <button onClick={() => {handleDelete(element)}}>x</button>
                                        </div>
                                    )
                                })
                            }

            <button type="submit" className={style.buttonEnd}>{pokemonData.name} Go!</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Create;
