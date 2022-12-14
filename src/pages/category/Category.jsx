import MealItemCard from "../../components/MealItemCard";
import {useParams} from "react-router-dom";
import {GetFilteredCategory} from "../../api";
import {useEffect} from "react";
import {Preloader} from "../../components/Preloader";
import MealItemList from "../../components/MealItemList";
function Category() {
    const {category} = useParams()
    const {data, isPending, error} = GetFilteredCategory(category)

    useEffect(()=>{
    }, [data])
    return <div>
        {
            isPending ? <Preloader/> : <MealItemList meals={data}/>
        }
    </div>
}


export default Category;