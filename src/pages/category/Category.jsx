import {useParams, useRouteMatch} from "react-router-dom";
import {GetAllCategories, GetFilteredCategory} from "../../api";
import {useContext, useEffect, useState} from "react";
import {Preloader} from "../../components/Preloader";
import MealItemList from "../../components/MealItemList";
import {MealsContext} from "../../context/MealsContext";
function Category() {
    const categorys = useRouteMatch();
    const {category_description, setDescription} = useContext(MealsContext);
    const {category} = useParams()
    const [meals, setMeals] = useState([])
    const {data, isPending, error} = GetFilteredCategory(category);
    const {data: dfcats, isPending: pendFcats, error: errFcats} = GetAllCategories();

    useEffect(()=>{
        if (data){
            setMeals(data.meals)
        }
    }, [data])
    useEffect(()=>{
        if (category_description.length===0){
            try {
                let result =dfcats.categories.find(el=>el.strCategory!==categorys).strCategoryDescription
                setDescription(result)
            } catch (e) {

            }
        }
    }, [dfcats])
    return <div>
        {
            meals  && <p className="description">{category_description}</p>
        }
        {
            isPending ? <Preloader/> : data ? <MealItemList meals={meals} /> : null
        }
    </div>
}


export default Category;