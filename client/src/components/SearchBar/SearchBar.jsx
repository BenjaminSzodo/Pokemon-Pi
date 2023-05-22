import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import style from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (name.trim() === "") {
      // El campo está vacío, no se realiza la búsqueda
      return;
    }

    dispatch(getPokemonByName(name));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit} className={style.button}>Buscar</button>
    </div>
  );
}

