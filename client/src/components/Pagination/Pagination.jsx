import style from './Pagination.module.css';

const Pagination = ({ pokemonsPerPage, allPokemons, currentPage, pagination }) => {
  const pageNumber = Math.ceil(allPokemons / pokemonsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      pagination(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumber) {
      pagination(currentPage + 1);
    }
  };

  return (
    <div className={style.container}>
      <nav>
        <button className={style.button} onClick={handlePrevious}>
          &laquo; Anterior
        </button>
        <p className={style.pageNumber}>{currentPage}</p>
        <button className={style.button} onClick={handleNext}>
          Siguiente &raquo;
        </button>
      </nav>
    </div>
  );
};

export default Pagination