import { Link } from "react-router-dom";

const Card = ({name,types,image,id}) => {
    return (
      <div key={id}>
        <Link to= {`/id/${id}`}>
        <img src={image} alt="image" />
        <h2>{name}</h2>
        </Link>
        <h2>{types}</h2>
      </div>
    );
  };

  export default Card
