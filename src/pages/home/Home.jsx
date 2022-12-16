import {useState, useEffect, useContext} from "react";
import {GetAllCategories} from "../../api"
import {Preloader} from  "../../components/Preloader"
import CategoryList from "../../components/CategoryList";
import Search from "../../components/Search";
import {useHistory, useLocation} from "react-router-dom";
function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const {data, isPending, error} = GetAllCategories();

    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item =>item.strCategory.toLowerCase().includes(str.toLowerCase()) )
        );
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(()=>{
        if (data){
            setCatalog(data.categories);
            setFilteredCatalog( search ?
                data.categories.filter(item =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())) : data.categories
            )
        } else {
        }
    },[data, search])
    return <>
        <Search cb={handleSearch}/>
        {isPending ? <Preloader/> : (
            <CategoryList catalog={filteredCatalog}/>
        )}

    </>
}

export default Home;