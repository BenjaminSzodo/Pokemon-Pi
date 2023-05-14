import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName, cleanPokemonByName } from "../../redux/actions";

const SearchBar= () => {
    const dispatch = useDispatch()
    const [name,setName] = useState('')

    const handleInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(cleanPokemonByName(dispatch));
        dispatch(getPokemonByName(name));
        setName('');
    }
    return (
        <div>
            <input type="search" placeholder="Search" onChange={(event) => handleInputChange(event)} />
            <button type="submit" onClick={(event) => handleSubmit(event)}>Go!</button>
        </div>
    )
}

export default SearchBar;