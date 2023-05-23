import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import style from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    if (name.trim() === "") {
      // El campo está vacío, no se realiza la búsqueda
      return;
    }
  
    dispatch(getPokemonByName(name))
      .then((result) => {
        if (!result || result.length === 0) {
          setErrorMessage("El Pokémon no existe");
        } else {
          setErrorMessage(""); // Limpiar el mensaje de error si se encuentra el Pokémon
        }
      })
      .catch((error) => {
        setErrorMessage("Error al buscar el Pokémon"); // Manejar el error de la solicitud
      });
  }

  return (
    <div className={style.searchbar}>
      <div className={style.container}>
              <input
        type="text"
        placeholder="Buscar..."
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit} className={style.button}>
        Buscar
      </button>
      {errorMessage && <p className={style["error-message"]}>{errorMessage}</p>}
    </div>
      </div>

  );
  
}
