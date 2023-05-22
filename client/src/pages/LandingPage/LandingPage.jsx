import { NavLink } from "react-router-dom";
import image from '../../components/Images/Pokedex.png'
import style from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={style.background}>
    <div>
        <img src={image} alt="image" />
      <div>
        <NavLink to="/homeSpa">
          <button className={style.button}>Go!</button>
        </NavLink>
      </div>
    </div>
    </div>
  );
}
