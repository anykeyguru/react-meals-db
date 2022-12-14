import MealItemCard from "./MealItemCard";

function MealItemList(props) {
    const {meals} = props
    return <div className="list">
        {
            meals.length > 0 ? meals.map(el => {
                return <MealItemCard key={el.idMeal} {...el}/>
            }) : null
        }
    </div>
}

export default MealItemList;