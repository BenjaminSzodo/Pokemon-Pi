import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import image from '../Images/Pokedex.png';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <div className={style.nav}>
      <img src={image} alt="image" className={style.logo} />
      <div className={style.center}>
        <SearchBar />
        <div>
          <button className={style.button}>
            <NavLink to={"/pokeCreate"}>Pokemon Creator</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
