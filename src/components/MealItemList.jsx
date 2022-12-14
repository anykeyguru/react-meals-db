import MealItemCard from "./MealItemCard";

function MealItemList(props) {
    const {meals} = props
    return <div className="list">
        {
            meals.meals && meals.meals.map(el => {
                return <MealItemCard key={el.idMeal} {...el}/>
            })
        }
    </div>
}

export default MealItemList;