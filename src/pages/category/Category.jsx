import {useParams} from "react-router-dom";
import {GetFilteredCategory} from "../../api";
import {useEffect, useState} from "react";
import {Preloader} from "../../components/Preloader";
import MealItemList from "../../components/MealItemList";
function Category(props) {
    const {categoryDesc} = props
    const {category} = useParams()
    const [meals, setMeals] = useState([])
    const {data, isPending, error} = GetFilteredCategory(category)

    useEffect(()=>{
        if (data){
            setMeals(data.meals)
        }
    }, [data])
    return <div>
        <p className="description">{categoryDesc}</p>
        {
            isPending ? <Preloader/> : data ? <MealItemList meals={meals} /> : null
        }
    </div>
}


export default Category;