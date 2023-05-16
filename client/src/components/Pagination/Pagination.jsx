


const Pagination = ({pokemonsPerPage,allPokemons,pagination}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumber.push(i);
    }    
    return (
        <nav>
            <ul>
                {
                    pageNumber?.map(num => (
                        <button key={num}>
                            <a onClick={()=> pagination(num)}>{num}</a>
                        </button>
                    ))
                }
            </ul>
        </nav>
    )
}


export default Pagination;