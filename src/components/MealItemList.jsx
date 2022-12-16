import MealItemCard from "./MealItemCard";
import NotFound from "../pages/notfound/NotFound";
import {useContext} from "react";
import {MealsContext} from "../context/MealsContext";

function MealItemList(props) {
    const {meals} = props
    return <div>
        {
            meals ? (<div className="list">
                {
                    meals && meals.length > 0 ? meals.map(el => {
                        return <MealItemCard key={el.idMeal} {...el}/>
                    }) : null
                }
            </div>) : <div><NotFound/></div>
        }
    </div>
}

export default MealItemList;