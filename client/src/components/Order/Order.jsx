import { orderByName, orderByAttk } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from './Order.module.css';

const Order = ({ setOrder, setCurrentPage }) => {
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
    <div className={styles.order}>
      <select className={styles.select} onChange={handleOrderName}>
        <option value="default">Default</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select className={styles.select} onChange={handleOrderAttk}>
        <option value="default">Default</option>
        <option value="D">Fuerte</option>
        <option value="A">Debil</option>
      </select>
    </div>
  );
};

export default Order;
