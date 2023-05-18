import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { filterType,cleanAllTypes } from "../../redux/actions";

const Filter = ({setCurrentPage,setOrder}) => {
    const dispatch = useDispatch();
    const allTypesPokemon = useSelector(state => state.filteredPokemons)
    console.log(allTypesPokemon);

    const handleFilterType = (event) => {

        dispatch(filterType(event.target.value)); 
        setCurrentPage(1);
    };

    return (
        <div>
          <label>Types: </label>
          <select onChange={(event) => { handleFilterType(event) }}>
          <option value="allPokemons">ALL</option>
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
      );
    };

export default Filter;