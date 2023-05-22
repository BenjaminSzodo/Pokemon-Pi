import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterType, filterDbApi } from "../../redux/actions";
import { getAllTypes } from "../../redux/actions";
import style from './Filter.module.css'

const Filter = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);
 

  const handleFilterType = (event) => {
    dispatch(filterType(event.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  const handleFilterFrom = (event) => {
    event.preventDefault();
    dispatch(filterDbApi(event.target.value));
    setCurrentPage(1);
    setOrder(event.target.value);
  };

  return (
    <div>
      <label>Types: </label>
      <select onChange={handleFilterType} className={style.select}>
        <option>Select one</option>
        {allTypes?.map((element) => {
          return (
            <option key={element.id} value={element.name}>
              {element.name}
            </option>
          );
        })}
      </select>
      <label>Created - Api</label>
      <select onChange={(event) => handleFilterFrom(event)} className={style.select}>
        <option value="all">ALL</option>
        <option value="api">API</option>
        <option value="created">CREATED</option>
      </select>
    </div>
  );
};

export default Filter;
