import {useState, useEffect} from "react";
import {GetAllCategories} from "../../api"
import {Preloader} from  "../../components/Preloader"
import CategoryList from "../../components/CategoryList";
function Home() {
    const [catalog, setCatalog] = useState([])
    const {data, isPending, error} = GetAllCategories();
    useEffect(()=>{
        if (data){
            setCatalog(data.categories);
        } else {
        }
    },[data])
    return <>
        {isPending ? <Preloader/> : (
            <CategoryList catalog={catalog}/>
        )}

    </>
}

export default Home;