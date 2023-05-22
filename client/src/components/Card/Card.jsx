import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ name, types, image, id }) => {
  return (
    <div className={style.body}>
      <Link to={`/id/${id}`}>
      <img src={image} alt="image" className={style.image} />
      </Link>
      <div className={style.textcontainer}>
      <Link to={`/id/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <h2 className={style.types}>{types}</h2>    
      </div>
    </div>
  );
};

export default Card;