import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar'
import Pagination from '../../components/Pagination/Pagination';



const Home = () => {

    return (
        <div>
            <SearchBar/>
            <div>
                <div>
                    <div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;