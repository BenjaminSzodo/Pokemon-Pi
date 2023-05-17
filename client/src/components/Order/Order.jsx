import { orderByName, orderByAttk } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Order = ({setOrder, setCurrentPage}) => {
    const dispatch = useDispatch();
    const handleOrderName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(event.target.value);
      };
    const handleOrderAttk = (event) => {
        event.preventDefault();
        dispatch(orderByAttk(event.target.value));
        setCurrentPage(1);
        setOrder(event.target.value);
      };
      return (
        <div>
            <select onChange={handleOrderName}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleOrderAttk}>
                <option value="A">Fuerte</option>
                <option value="D">Debil</option>
            </select>
        </div>
      )

}

export default Order