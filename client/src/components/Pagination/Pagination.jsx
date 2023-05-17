


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
    <nav>
      <ul className="pagination">
        <button className="pagination-item" onClick={handlePrevious}>
          &laquo; Anterior
        </button>
        <button className="pagination-item active">{currentPage}</button>
        <button className="pagination-item" onClick={handleNext}>
          Siguiente &raquo;
        </button>
      </ul>
    </nav>
  );
};

export default Pagination